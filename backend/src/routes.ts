import { Router } from 'express';

import { registerLimiter } from './rateLimits';
import UserController from '@controllers/userController';
import TechnologyController from '@controllers/technologyController';

const routes = Router();

routes.post('/api/v1/users', registerLimiter, UserController.create);
routes.get('/api/v1/users', UserController.index);
routes.get('/api/v1/users/:id', UserController.show);
routes.put('/api/v1/users/:id', UserController.edit);
routes.delete('/api/v1/users/:id', UserController.destroy);

routes.get('/api/v1/technologies', TechnologyController.index);
routes.post('/api/v1/technologies', TechnologyController.create);
routes.put('/api/v1/technologies', TechnologyController.edit);
routes.delete('/api/v1/technologies', TechnologyController.destroy);

export default routes;
