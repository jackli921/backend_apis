import { Router } from 'express';
import { UserController } from '@controller/user.controller';

const userRouter = Router();

userRouter
    .route('/users')
    .get(UserController.getUser)
    .post(UserController.createUser)
    .put(UserController.updateUser)
    .delete(UserController.deleteUser);

export default userRouter;
