import { Router } from 'express';

import UserController from '../controllers/userController';

const routes = Router();

// TODO colocar query params mais foda depois para search

routes.post('/users', UserController.create);
routes.get('/users/:id', UserController.show);
routes.get('/users', UserController.index);

export default routes;
