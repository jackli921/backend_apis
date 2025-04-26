import { NextFunction, Request, Response } from 'express';

export class UserController {
    public static createUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'This route will create a new user.' });
    }
    public static getUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'This route will return a user profile based on userId.' });
    }
    public static updateUser(req: Request, res: Response, next: NextFunction): void {
        res.json({ message: 'This route will update an existing users.' });
    }
    public static deleteUser(req: Request, res: Response, next: NextFunction) : void{
        res.json({ message: 'This route will delete a user.'})
    }
}