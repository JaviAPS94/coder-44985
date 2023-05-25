import passport from 'passport';
import jwt from 'passport-jwt';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {
    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'coderSecret'
    }, async(jwt_payload, done) => {
        try {
            console.log(jwt_payload);
            return done(null, jwt_payload.user);
        } catch (error) {
            return done(error);
        }
    }));
};

export default initializePassport;