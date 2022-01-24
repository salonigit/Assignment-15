const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const getAllDataService = (()=> {
    let result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = JSON.parse(data);
    return result = { success: obj }
})


export default getAllDataService