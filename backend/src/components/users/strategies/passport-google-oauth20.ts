import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { config } from '../../../config/config';
import { createGoogleUser } from '../controllers/users.services';
import User from '../models/users';

const opts = {
    clientID: config.google.clientId,
    clientSecret: config.google.clientSecret,
    callbackURL: '/users/google/callback',
};

const googleStrategy = new GoogleStrategy(opts, async (accessToken, refreshToken, profile, done) => {
    try {
        const user = await User.findOne({ 'accountType.googleId': profile.id });

        if (user) {
            return done(null, user);
        }

        const newUser = createGoogleUser(profile);

        return done(null, newUser);
    } catch (err) {
        console.error(err);
    }
});

export default passport.use(googleStrategy);
