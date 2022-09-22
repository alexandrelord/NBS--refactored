import express, { Request, Response, Express } from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions';
import credentials from './middleware/credentials';
import logger from './middleware/logger';
import errorHandler from './middleware/errorHandler';
import chalk from 'chalk';
import cookieSession from 'cookie-session';
import { config } from './config/config';
import './config/database'; // Connect to database
import passport from 'passport';
import './config/auth/passportGoogleSSO'; // Passport Google SSO
import './middleware/auth'; // check if user is authenticated

/** Route Modules */
import projectsRouter from './routes/api/projects';
import usersRouter from './routes/users/auth';

const router: Express = express();

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
router.use(credentials);

// Cross Origin Resource Sharing
router.use(cors(corsOptions));

/** Middleware */
router.use(logger);
router.use(express.json());
router.use(cookieSession({ maxAge: 24 * 60 * 60 * 1000, keys: [config.cookie.secret] }));
router.use(passport.initialize());
router.use(passport.session());

/** Health Check */
router.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));

/** Route Handlers */
router.use('/users', usersRouter);
router.use('/projects', projectsRouter);
router.use((req: Request, res: Response) => {
    const error = new Error('Not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Error Handling */
router.use(errorHandler);

/**  Server */
const PORT = config.server.port;
router.listen(PORT, () => {
    console.log(chalk.yellow(`Server is running on port ${PORT}`));
});
