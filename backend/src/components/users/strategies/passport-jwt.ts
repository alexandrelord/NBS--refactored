import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { config } from '../../../config/config';
import User from '../models/users';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt.accessTokenSecret,
};

const jwtStrategy = new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
        const user = await User.findById(jwtPayload.id);

        if (user) {
            return done(null, user);
        }

        return done(null, false);
    } catch (err) {
        console.error(err);
    }
});

export default passport.use(jwtStrategy);
