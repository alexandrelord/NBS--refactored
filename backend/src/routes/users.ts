import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

const successLoginUrl = 'http://localhost:3000/successLogin';
const failureLoginUrl = 'http://localhost:3000/failureLogin';

router.get('/login/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback route
router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureMessage: 'Invalid login',
        failureRedirect: failureLoginUrl,
        successRedirect: successLoginUrl
    })
);

// OAuth logout route
router.get('/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err: any) => {
        if (err) return next(err);
        res.redirect('/users/login/google');
    });
});

export default router;
