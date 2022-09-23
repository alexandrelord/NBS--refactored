import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import isUserAuthenticated from '../../middleware/auth';

const router = express.Router();

// @route   GET /users/auth/user
router.get('/auth/user', isUserAuthenticated, (req: Request, res: Response) => {
    res.status(200).json({ user: req.user });
});

// @route   GET /users/google/login
router.get('/google/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'http://localhost:3000/login/failure',
        successRedirect: 'http://localhost:3000/login/success'
    })
);

router.get('/google/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err: any) => {
        if (err) return next(err);
    });
    res.status(200).json({ logout: 'success' });
});

export default router;
