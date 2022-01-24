const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const getDataService = async function (req) {
    const id = req.query.id
    if (!id) {
        return { error: "Error.Please Provide Id" }
    }
    let result = {}
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = await JSON.parse(data)
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            result = { success: obj[i].name }
            return result
        }
    }
    return result = { error: "Error.Given Id is not valid" }
}

module.exports = {
    getDataService
}