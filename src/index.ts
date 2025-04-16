import { logger } from './logger';
import MyController from '@controller/my';
import express, { Express, NextFunction, Request, Response } from 'express';

const app: Express = express();
const port = 3000;
const log = new logger();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    // Analyzing request object
    log.info('Request Headers:', req.headers);
    log.info('Request Method:', req.method);
    log.info('Request URL:', req.url);
    log.info('Request Body:', req.body);
    // These will also be useful
    // log.info('Request Params:', req.params);
    // log.info('Request Query:', req.query);

    res.json({ message: 'hello world' });
});

app.get('/my-endpoint', MyController.handleRequest);

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});
