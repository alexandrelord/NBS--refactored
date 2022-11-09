import { Router, Request, Response } from 'express';
import userRoutes from '../../users/routes/users';
import projectRoutes from '../../projects/routes/projects_routes';

const router = Router();

// Health check
router.get('/ping', (req: Request, res: Response) => res.status(200).json({ message: 'pong' }));
// Routes
router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

export default router;
