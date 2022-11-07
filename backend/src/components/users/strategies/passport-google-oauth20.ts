import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../../../config/config';
import User from '../models/users';

const opts = {
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: '/users/google/callback',
};

const googleStrategy = new GoogleStrategy(opts, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ email: profile.emails?.[0].value });
        if (user) {
            return done(null, user);
        }
        const newUser = await User.create({
            email: profile.emails?.[0].value,
        });
        return done(null, newUser);
    } catch (err) {
        console.error(err);
    }
});

export default passport.use(googleStrategy);
