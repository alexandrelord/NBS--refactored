import express from 'express';
import passportJWT from '../strategies/passport-jwt';
import passportGoogleOAuth20 from '../strategies/passport-google-oauth20';
import { localLogin, localRegister, refreshToken, googleLogin } from '../controllers/users';

const router = express.Router();

// OAuth 2.0
router.get('/google', passportGoogleOAuth20.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passportGoogleOAuth20.authenticate('google', { session: false }), googleLogin);
// JWT
router.post('/login', localLogin);
router.post('/register', localRegister);
router.get('/refresh', refreshToken);
// protected routes
router.get('/protected', passportJWT.authenticate('jwt', { session: false }), (req, res) => {
    res.status(200).json({
        msg: 'You are authorized',
    });
});

export default router;
