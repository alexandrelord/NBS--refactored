import express, { Request, Response, Express } from 'express';

/** Config */
import { config } from './config/config';
import './config/database'; // Connect to database
import apiRules from './config/apiRules'; // Set API rules

import logger from './utils/logger';
import chalk from 'chalk';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './auth/passportGoogleSSO'; // Passport Google SSO

/** Route Modules */
import projectsRouter from './routes/projects';
import usersRouter from './routes/users';

const router: Express = express();

/** Rules of our API */
router.use(apiRules);

/** Middleware */
router.use(logger);
router.use(express.json());
router.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [config.cookie.secret] }));
router.use(passport.initialize());
router.use(passport.session());

/** Health Check */
router.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));

/** Routes */
router.use('/users', usersRouter);
router.use('/projects', projectsRouter);
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
