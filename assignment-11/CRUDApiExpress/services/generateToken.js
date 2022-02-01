import jwt from 'jsonwebtoken'
import db from '../models'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
const users = db.users

dotenv.config()

const generateToken = async (req, res) => {
    if (req.body.email && req.body.password) {
        const email = req.body.email;
        const user = await users.findOne({ where: { email: email } })
        if (user) {
            const validPassword = await bcrypt.compare(req.body.password, user.dataValues.password)
            if (validPassword) {
                const payload = {
                    email: user.email
                };
                const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn : '1d' });
                res.json({
                    token: token
                });
            }
            else {
                res.send("Wrong password")
            }
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
}
export default generateToken
