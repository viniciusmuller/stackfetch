import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Technology from '@models/technology';
import TechnologyView from '@views/technologyView';

export default {
  async index (request: Request, response: Response) {
    const techRepository = getRepository(Technology);

    const technologies = await techRepository.find();
    return response.json(TechnologyView.renderMany(technologies));
  }
}
