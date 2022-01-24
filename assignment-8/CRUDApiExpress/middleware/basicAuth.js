const auth = require('basic-auth')

const mwBasicAuth = async (req, res, next) => {
    const user = await auth(req)
    const username = 'test'
    const password = '123456'
    if (user && user.name.toLowerCase() === username.toLowerCase() && user.pass === password) {
        next()
    } else {
        res.statusCode = 401
        res.end('Access denied')
    }
}

module.exports = { mwBasicAuth }