import fs from 'fs'
import path from 'path'

const getUserService = async function (req) {
    const id = req.query.id
    if (!id) {
        return 'Error.Please Provide Id'
    }
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = await JSON.parse(data)
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            return obj[i].userName
        }
    }
    return 'Error.Given Id is not valid'
}

module.exports = {
    getUserService
}