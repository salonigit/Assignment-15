import passport from 'passport'
import passportJWT from 'passport-jwt'
import db from '../models'
import cfg from '../config/Jwtconfig.js'
import dotenv from 'dotenv'

const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const users = db.users

dotenv.config()

const params = {
    secretOrKey: process.env.SECRET_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function () {
    const strategy = new Strategy(params, async function (payload, done) {
        console.log(payload)
        const user = await users.findByPk(payload.email) || null;
        if (user) {
            return done(null, {
                email: user.email
            });
        } else {
            return done(new Error("User not found"), null);
        }
    });
    passport.use(strategy);
    return {
        initialize: function () {
            return passport.initialize();
        },
        authenticate: function () {
            return passport.authenticate("jwt", cfg.jwtSession);
        }
    };
};
