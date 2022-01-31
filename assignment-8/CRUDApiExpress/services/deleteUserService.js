const fs = require("fs")
const path = require('path')

const deleteUserService = async function (req) {
    const id = req.body.id
    const data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    const newObj = obj.filter((originalData, i) => {
        return originalData.id != id
    })
    json = JSON.stringify(newObj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            return 'error'
        }
    });
    return 'Deleted Successfully'
}

module.exports = {
    deleteUserService
}