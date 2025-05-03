import { Router } from 'express';
import UserController from '@controller/user.controller';
import cacheMiddleware from '@services/cache';

const userRouter = Router();

userRouter
    .route('/users')
    .get(cacheMiddleware('2 minutes'), UserController.getUser)
    .post(UserController.createUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

export default userRouter;
