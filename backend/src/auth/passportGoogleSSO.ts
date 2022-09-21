import { config } from '../config/config';
import User from '../models/user';

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
                    await newUser.save();
                    done(null, newUser);
                } else {
                    done(null, newUser);
                }
            }
        }
    )
);

passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    console.log('deserializeUser', user);
    done(null, user);
});
