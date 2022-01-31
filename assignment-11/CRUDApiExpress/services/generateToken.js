import jwt from 'jwt-simple'
import db from '../models'
const users = db.users
const cfg = require("../config/Jwtconfig");

const generateToken = async (req, res) => {
    if (req.body.email && req.body.password) {
        const email = req.body.email;
        const password = req.body.password;
        const user = await users.findAll({ where: { email: email, password: password } })
        if (user) {
            const payload = {
                email: user.email
            };
            const token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
}
export default generateToken