import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

const CLIENT_HOME_PAGE_URL = 'http://localhost:3000';

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: CLIENT_HOME_PAGE_URL,
        successRedirect: '/login/failed'
    })
);

router.get('/google/logout', (req: Request, res: Response, next: NextFunction) => {
    req.logout((err: any) => {
        if (err) return next(err);
    });
    res.redirect(CLIENT_HOME_PAGE_URL);
});

router.get('/login/success', (req: Request, res: Response) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'user has successfully authenticated',
            user: req.user
        });
    }
});

router.get('/login/failed', (req: Request, res: Response) => {
    res.status(401).json({
        success: false,
        message: 'user failed to authenticate.'
    });
});

export default router;
