import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Technology from '@models/technology';
import TechnologyView from '@views/technologyView';
import technologySchema from '@validation/technologySchema';

// TODO improve code in both user and technology controllers

export default {
  async index(_: Request, response: Response) {
    const techRepository = getRepository(Technology);

    const technologies = await techRepository.find();
    return response.json(TechnologyView.renderMany(technologies));
  },

  async destroy(request: Request, response: Response) {
    const techRepository = getRepository(Technology);
    const id = request.params.id;

    let tech = techRepository.findOne(id);

    if (tech) {
      await techRepository.delete(id);
      return response.json({ message: 'Technology edited.' });
    }
    return response.status(404).json({ message: 'Invalid technology ID.' });
  },

  async edit(request: Request, response: Response) {
    const techRepository = getRepository(Technology);
    const id = request.params.id;

    let tech = await techRepository.findOne(id);

    const casted = technologySchema.cast(request.body, {
      stripUnknown: true
    });

    if (tech) {
      tech = { ...tech, ...casted };
      await techRepository.save(tech);
      return response.json({ message: 'Technology edited.' });
    }
    return response.status(404).json({ message: 'Invalid technology ID.' });
  },

  async create(request: Request, response: Response) {
    const techRepository = getRepository(Technology);

    await technologySchema.validate(request.body, {
      strict: true,
      abortEarly: false
    });

    const techData = technologySchema.cast(request.body, {
      stripUnknown: true
    });

    const tech = techRepository.create(techData as Object);
    await techRepository.save(tech);

    return response.status(201).json({ message: 'Technology created.' });
  }
};
