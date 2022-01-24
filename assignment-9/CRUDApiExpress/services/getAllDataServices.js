const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const getAllDataService = async  (()=> {
    let result = {}
    let data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = JSON.parse(data);
    return result = { success: obj }
})

module.exports = {
    getAllDataService
}