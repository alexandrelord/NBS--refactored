import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

// Google OAuth login route
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get(
    '/oauth2callback',
    passport.authenticate('google', {
        successRedirect: '/users',
        failureRedirect: '/users'
    })
);

// OAuth logout route
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err: any) => {
        if (err) return next(err);
        res.redirect('/users');
    });
});

export default router;
