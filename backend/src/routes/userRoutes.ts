import { Router } from 'express';

import UserController from '@controllers/userController';
import { registerLimiter } from '~/rateLimits';
import { authRequired } from './auth';

const userRoutes = Router();

userRoutes.post('/api/v1/users', registerLimiter, UserController.create);
userRoutes.get('/api/v1/users', UserController.index);
userRoutes.get('/api/v1/users/:id', UserController.show);
userRoutes.put('/api/v1/users/:id', authRequired, UserController.edit);
userRoutes.delete('/api/v1/users/:id', authRequired, UserController.destroy);

export default userRoutes;
