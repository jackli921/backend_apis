import { Request, Response, NextFunction, response } from 'express';
import { logger } from '../utils/logger';

export const requestLoggerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    const requestDetails = {
        method: req.method,
        url: req.originalUrl || req.url,
        headers: req.headers, // may contain sensitive info like cookies, auth tokens
        query: req.query,
        body: req.body, // logging large bodies can be problematic.
        ip: req.ip,
    };

    logger.info('Incoming Request:', requestDetails);

    res.on('finish', () => {
        const responseDetails = {
            status: res.statusCode,
            method: req.method,
            url: req.originalUrl || req.url,
        };

        if (res.statusCode >= 500) {
            logger.error('Request Failed:', responseDetails);
        } else if (res.statusCode >= 400) {
            logger.warn('Request Client Error:', responseDetails);
        } else {
            logger.info('Request Finished:', responseDetails);
        }
    });
    next();
};
