const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const deleteService = async function (req) {
    const id = req.body.id
    var result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    let newObj = obj.filter((originalData, i) => {
        return originalData.id != id
    })
    json = JSON.stringify(newObj);
    console.log(json);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            result = { error: "error" }
            return;
        }
    });
    return result = { success: "Deleted Successfully" }
}

module.exports = {
    deleteService
}