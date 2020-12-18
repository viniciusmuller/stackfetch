import { Router } from 'express';

import TechnologyController from '@controllers/technologyController';
import { authRequired } from './auth';

const techRoutes = Router();

techRoutes.get('/api/v1/technologies', TechnologyController.index);
techRoutes.post(
  '/api/v1/technologies',
  authRequired,
  TechnologyController.create
);
techRoutes.put('/api/v1/technologies', authRequired, TechnologyController.edit);
techRoutes.delete(
  'api/v1/technologies',
  authRequired,
  TechnologyController.destroy
);

export default techRoutes;
