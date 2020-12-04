import { Router } from 'express';

import UserController from '@controllers/userController';
import TechnologyController from '@controllers/technologyController';

const routes = Router();

routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);

routes.get('/technologies', TechnologyController.index);

export default routes;
