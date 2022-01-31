import auth from 'basic-auth'
import user from '../data.json'

const mwBasicAuth = async (req, res, next) => {
    const User = await auth(req)
    for(let i=0; i<l;i++){
    if (User && User.name.toLowerCase() === user[i].userName.toLowerCase() && user[i].passward === User.password) {
        next()
        return
        }
    } 
    res.end('Access denied')
}

module.exports = { mwBasicAuth }