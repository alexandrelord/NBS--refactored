import express, { Request, Response, NextFunction } from 'express';
import isUserAuthenticated from '../../middleware/auth';

const router = express.Router();

// @route   GET /users/auth/user
router.post('/auth/user', isUserAuthenticated, (req: Request, res: Response) => {
    res.status(200).json({ user: req.user });
});

export default router;
