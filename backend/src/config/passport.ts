import passport from 'passport';
import { config } from './config';
import { VerifyCallback } from 'passport-google-oauth2';
import User from '../models/user';

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: config.google.clientID,
            clientSecret: config.google.clientSecret,
            callbackURL: config.google.callbackURL
        },
        (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback) => {
            User.findOne({ googleId: profile.if }, (error: any, user: any) => {
                if (error) return done(error, false);
                if (user) {
                    return done(null, user);
                } else {
                    const newUser = new User({
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        googleId: profile.id
                    });
                    newUser.save((error: any) => {
                        if (error) return done(error);
                        return done(null, newUser);
                    });
                }
            });
        }
    )
);

passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
    User.findById(id, (error: any, user: any) => {
        done(error, user);
    });
});
