import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
// import * as Yup from 'yup';

import User from '../models/user';
import Technology from '../models/technology';

import UserView from '../views/userView';

//TODO create migration script for saving languages on the database
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

    const {
      name,
      age,
      about,
      gitHubUsername,
      stack
    } = request.body;

    // TODO data validation with Yup

    const user = userRepository.create({
      name: name,
      age: age,
      about: about,
      gitHubUsername: gitHubUsername
    });

    // Stack must be an Array containing the selected technologies IDs.
    // A user object can have up to seven technologies.
    const techs = await technologyRepository.findByIds(stack.slice(0, 7));
    user.technologies = techs;

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

    let { page } = request.query || 0;

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
                : response.status(404).json({message: "User not found"});
  }
};
