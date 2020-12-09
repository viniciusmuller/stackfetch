import { Router } from 'express';

import { registerLimiter } from './rateLimits';
import TechnologyController from '@controllers/technologyController';
import UserController from '@controllers/userController';

const routes = Router();

routes.post('/v1/users', registerLimiter, UserController.create);
routes.get('/v1/users', UserController.index);
routes.get('/v1/users/:id', UserController.show);
routes.put('/v1/users/:id', UserController.edit);
routes.delete('/v1/users/:id', UserController.destroy);

routes.get('/v1/technologies', TechnologyController.index);
routes.post('/v1/technologies', TechnologyController.create);
routes.put('/v1/technologies', TechnologyController.edit);
routes.delete('/v1/technologies', TechnologyController.destroy);

export default routes;
