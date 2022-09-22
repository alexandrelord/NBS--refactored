import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import isUserAuthenticated from '../middleware/auth';

const router = express.Router();

router.post('/auth/user', isUserAuthenticated, (req: Request, res: Response) => {
    res.status(200).json({ user: req.user });
});

router.get('/login/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureMessage: 'Invalid login',
        failureRedirect: 'http://localhost:3000/login/failure',
        successRedirect: 'http://localhost:3000/login/success'
    })
);

router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err: any) => {
        if (err) return next(err);
        res.redirect('/users/login/google');
    });
});

export default router;
