import { requestLoggerMiddleware } from './middlewares/requestLogger';
import userRouter  from './routes/user.routes';
import express, { Express, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';

export function createApp(): Express {
    const app = express();

    const apiLimiter = rateLimit({
        windowMs: 15 * 60 * 3600,
        max: 10,
        message: 'Too many requests from this IP, please try again after 15 minutes'
    })
    app.use(bodyParser.json());
    app.use(requestLoggerMiddleware);
    app.use(apiLimiter)

    app.use('/api/v1/', userRouter);

    app.get('/ip', (req, res) => {
        res.send(req.ip)
    });

    app.get('/', (req, res, next) => {
        res.json({ message: 'hello world' });
    });

    return app;
}
