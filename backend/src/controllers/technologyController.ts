import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Technology from '@models/technology';
import TechnologyView from '@views/technologyView';
import technologySchema from '@validation/technologySchema';

export default {
  async index(_: Request, response: Response) {
    const techRepository = getRepository(Technology);

    const technologies = await techRepository.find();
    return response.json(TechnologyView.renderMany(technologies));
  },

  // TODO create authentication required decorator
  async destroy(request: Request, response: Response) {

    return response.status(501).json({ message: 'Not implemented.' })
  },

  async edit(request: Request, response: Response) {

    return response.status(501).json({ message: 'Not implemented.' })
  },

  async create(request: Request, response: Response) {
    const techRepository = getRepository(Technology);

    await technologySchema.validate(request.body, {
      strict: true,
      abortEarly: false
    });
    const techData = technologySchema.cast(request.body, { stripUnknown: true });
    const tech = techRepository.create(techData as Object);
    await techRepository.save(tech);

    return response.status(201).json({ message: 'Technology created.' });
  }
}
