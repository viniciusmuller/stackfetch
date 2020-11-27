import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Technology from '@models/technology';
import User from '@models/user';

import UserView from '@views/userView';

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
   * @returns JSON formatted information about the created user.
   */
  async create (request: Request, response: Response) {

    const userRepository = getRepository(User);
    const technologyRepository = getRepository(Technology);

    let postData;

    const {
      name,
      age,
      about,
      gitHubUsername,
      stack
    } = postData = request.body;

    // TODO improve validation error messages.
    const userSchema = Yup.object().shape({
      name: Yup.string()
        .required()
        .min(7)
        .max(30),
      
      age: Yup.number()
        .required()
        .integer()
        .min(10)
        .max(120),

      about: Yup.string()
        .required()
        .min(20)
        .max(300),

      // TODO check if the given username exists using GitHub API.
      gitHubUsername: Yup.string()
        .required()
        .min(4)
        .max(39),

    // Stack must be an Array containing the user technologies IDs.
    // TODO refuse empty stack, since Yup's min doesn't work on arrays.
      stack: Yup.array()
        .required()
        .of(Yup.number())
        .max(8)
    });

    await userSchema.validate(postData, {
      abortEarly: false,
      strict: true
    });

    const user = userRepository.create({
      name: name,
      age: age,
      about: about,
      gitHubUsername: gitHubUsername
    });

    user.technologies = await technologyRepository.findByIds(stack)

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

    const userRepository = getRepository(User);

    const { page } = request.query || 0;

    const users = await userRepository.find({
      relations: ['technologies'],
      skip: Number(page) * 10,
      take: 10
    });
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
    const { id } = request.params;

    const user = await userRepository.findOne(id, {
      relations: ['technologies']
    });

    return user ? response.json(UserView.render(user))
                : response.status(404).json({ message: 'User not found' });
  }
};
