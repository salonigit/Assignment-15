const consoleRequest = async (req, res, next) => {
    console.log(req)
    next()
}

module.exports = { consoleRequest }
