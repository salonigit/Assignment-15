const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const putService = async function (req) {
    const newData = req.body
    var result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    obj.forEach((originalData, i) => {
        if (newData.id == originalData.id) {
            originalData.name = newData.name
        }
    })
    json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            result = { error: "error" }
            return;
        }
    });
    return result = { success: obj }
}

module.exports = {
    putService
}