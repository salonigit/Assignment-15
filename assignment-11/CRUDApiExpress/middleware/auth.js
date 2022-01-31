import passport from 'passport'
import passportJWT from 'passport-jwt'
import db from '../models'
import cfg from '../config/Jwtconfig.js'
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy
const users = db.users
const params = {
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function () {
    const strategy = new Strategy(params, async function (payload, done) {
        const user = await users.findOne(payload.email) || null;
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