import express, { Request, Response, NextFunction, Express } from 'express';
import { config } from './config/config';
import mongoose from 'mongoose';
import chalk from 'chalk';
import logger from './utils/logger';

const router: Express = express();

/** Connect to Mongo */
mongoose
    .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log(chalk.green('MongoDB connected'));
    })
    .catch((err) => {
        console.error(err);
    });

/** Middleware */
router.use(logger);
router.use(express.json());

/** Rules of our API */
router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

/** Health Check */
router.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));

/** Routes */
router.use((req: Request, res: Response) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});

/**  Server */
const PORT = config.server.port;
router.listen(PORT, () => {
    console.log(chalk.yellow(`Server is running on port ${PORT}`));
});
