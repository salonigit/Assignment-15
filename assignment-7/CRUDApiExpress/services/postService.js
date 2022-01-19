const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const postService = async function (req) {
    const newData = req.body
    var result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    obj.push(newData);
    json = JSON.stringify(obj);
    fs.writeFileSync(path.join(__dirname, '../data.json'), json, 'utf8', function (err) {
        if (err) {
            result = { error: "Error" };
        }
    })
    result = { success: obj }
    return result;
}

module.exports = {
    postService
}