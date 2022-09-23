import { config } from '../config';
import User from '../../models/user';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth20';

const GoogleStrategy = passportGoogle.Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackURL
        },
        async (accessToken, refreshToken, profile, done) => {
            const user = await User.findOne({ googleId: profile.id });

            if (!user) {
                const newUser = await User.create({
                    googleId: profile.id,
                    username: profile.displayName,
                    email: profile.emails?.[0].value
                });
                if (newUser) {
                    done(null, newUser);
                }
            } else {
                done(null, user);
            }
        }
    )
);

// Generate session token with user id
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});
