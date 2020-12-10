import { Router } from 'express';

import TechnologyController from '@controllers/technologyController';

const techRoutes = Router();

techRoutes.get('/v1/technologies', TechnologyController.index);
techRoutes.post('/v1/technologies', TechnologyController.create);
techRoutes.put('/v1/technologies', TechnologyController.edit);
techRoutes.delete('/v1/technologies', TechnologyController.destroy);

export default techRoutes;
