import express, { Request, Response } from 'express';
import projectRoutes from './projects';
import authRoutes from './auth';

const router = express.Router();

/** Health Check */
router.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));

router.get('/projects', projectRoutes);
router.get('/auth', authRoutes);

export default router;
