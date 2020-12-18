import { Request, Response } from 'express';
import { getRepository, Brackets } from 'typeorm';

import { masterKey } from '@config/apiConfig';
import Technology from '@models/technology';
import User from '@models/user';
import UserView from '@views/userView';
import userSchema from '@validation/userSchema';

// TODO uses classes as controllers
export default {
  /**
   * Creates a user into the database and returns his information.
   *
   * @param name - Passed via request query params.
   * @param page - Passed via request query params.
   * @param age - Passed via request query params.
   * @param about - Passed via request query params.
   * @param gitHubUsername - Passed via request query params.
   * @param stack - Passed via request query params.
   *
   * @param request - HTTP Request.
   * @param response - HTTP Response.
   * @returns JSON reponse containing information about the created user.
   */
  async create(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const technologyRepository = getRepository(Technology);

    await userSchema.validate(request.body, {
      abortEarly: false,
      strict: true
    });

    const casted = userSchema.cast(request.body, {
      stripUnknown: true
    });

    if (casted === undefined) throw new Error('stack was undefined.');

    const { stack, ...userData } = casted;

    const user = userRepository.create(userData);

    user.technologies = await technologyRepository.findByIds(stack);
    await userRepository.save(user);
    return response.status(201).json(UserView.render(user));
  },

  /**
   * Paginate users from the database.
   *
   * @param page - Passed via request query params.
   * @param request - HTTP Request.
   * @param response - HTTP Response.
   * @returns JSON response containing an Array of users.
   */
  async index(request: Request, response: Response) {
    const pageSize = 10;
    const userRepository = getRepository(User);

    const page = request.query.page || 0;
    const order = request.query.order == 'asc' ? 'ASC' : 'DESC';

    // If name is not provided, we default it to match any value.
    let name = request.query.name || '';
    name = `%${name}%`;

    const stackQs = request.query.stack as string;
    // Mapping the query string comma separated numbers into an Array.
    let stack = stackQs ? stackQs.split(',').map((x) => +x) : [];

    // TODO not strict query, (192,1 returning users that contains 1 and not 192 too)
    let users = await userRepository
      .createQueryBuilder('user')
      .innerJoin('user.technologies', 'tech')
      // If stack is not provided, select any user stack
      .where(stack.length > 0 ? 'tech.id IN (:...stack)' : '1=1', {
        stack: stack
      })
      .andWhere(
        new Brackets((qb) => {
          qb.where('user.name ILIKE :name', {
            name: name
          }).orWhere('user.github_username ILIKE :name', { name: name });
        })
      )
      .getMany();

    // The above query is returning the users with only the technologies
    // that match on the query instead of all of them, this is a pretty stupid
    // fix, but it works.
    // Also, typeorm have some issues with ordering while using where
    // and pagination, so we paginate and order the users here.
    users = await userRepository.findByIds(
      users.map((u) => u.id),
      {
        order: {
          id: order
        },
        skip: Number(page) * pageSize,
        take: pageSize
      }
    );

    //console.log(users);

    return response.json(UserView.renderMany(users));
  },

  /**
   * Returns information from a given user.
   *
   * @param id - Passed via request params.
   * @param request - HTTP Request.
   * @param response - HTTP Response.
   * @returns JSON response containing user information.
   */
  async show(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const id = request.params.id;

    // TODO now relation is eager
    const user = await userRepository.findOne(id, {
      relations: ['technologies']
    });

    return user
      ? response.json(UserView.render(user))
      : response.status(404).json({ message: 'User not found' });
  },

  async destroy(request: Request, response: Response) {
    const userRepository = getRepository(User);
    const id = request.params.id;

    const user = await userRepository.findOne(id);

    if (user) {
      await userRepository.delete(id);
      return response.json({ message: 'User succesfully deleted.' });
    }
    return response.status(404).json({ message: 'Invalid user ID.' });
  },

  async edit(request: Request, response: Response) {
    // TODO edit user

    return response.status(501).json({ message: 'Not implemented.' });

    // const userRepository = getRepository(User);
    // const id = request.params.id;
    // const key = request.body.key;

    // if (key != masterKey)
    //   return response.status(401).json({ message: 'Invalid API master key.' });

    // let user = userRepository.findOne(id);
  }
};
