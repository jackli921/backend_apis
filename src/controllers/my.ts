import { Request, Response } from 'express';

export class MyController {
    public static handleRequest(req: Request, res: Response): void {
        res.json({ message: 'hello from my controller' });
    }
}