import { requestLoggerMiddleware } from './middlewares/requestLogger';
import userRouter  from './routes/user.routes';
import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';

export function createApp(): Express {
    const app = express();

    app.use(bodyParser.json());

    app.use(requestLoggerMiddleware);

    app.use('/api/v1/', userRouter);

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: 'hello world' });
    });

    return app;
}
