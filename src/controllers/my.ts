import { Request, Response } from 'express';

class MyController {
    public static handleRequest(req: Request, res: Response): void {
        res.json({ message: 'hello from my controller' });
    }
}

export default MyController;
