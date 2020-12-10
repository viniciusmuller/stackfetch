import { Router } from 'express';

import UserController from '@controllers/userController';
import { registerLimiter } from '~/rateLimits';

const userRoutes = Router();

userRoutes.post('/v1/users', registerLimiter, UserController.create);
userRoutes.get('/v1/users', UserController.index);
userRoutes.get('/v1/users/:id', UserController.show);
userRoutes.put('/v1/users/:id', UserController.edit);
userRoutes.delete('/v1/users/:id', UserController.destroy);

export default userRoutes;
