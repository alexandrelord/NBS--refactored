import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

// @route   GET /users/google/login
router.get('/google/login', passport.authenticate('google', { scope: ['profile', 'email'] }));

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
