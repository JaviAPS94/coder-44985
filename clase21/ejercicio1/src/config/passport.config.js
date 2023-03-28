import passport from 'passport';
import GitHubStrategy from 'passport-github2';
import userModel from '../models/users.model.js';

const initializePassport = () => {
    passport.use('github', new GitHubStrategy({
        clientID: 'Iv1.0f96ca8dec26bc32',
        clientSecret: '8c6e20786d6d8ea401f680c6955880e411382e50',
        callbackURL: 'http://localhost:8080/api/auth/github-callback'
    }, async(accessToken, refreshToken, profile, done) => {
        try {
            console.log(profile);
            const user = await userModel.findOne({ email: profile._json.email });
            if (!user) {
                const newUser = {
                    first_name: profile._json.name,
                    last_name: '',
                    age: 18,
                    email: profile._json.email,
                    password: ''
                };

                const result = await userModel.create(newUser);

                done(null, result);
            } else {
                done(null, user);
            }
        } catch (error) {
            done(error)
        }
    }))

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        const user = await userModel.findById(id);
        done(null, user);
    });
};

export default initializePassport;