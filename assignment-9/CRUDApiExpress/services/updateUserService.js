import fs from'fs'
import path from 'path'

const updateUserService = async function (req) {
    const newData = req.body
    const data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    obj.forEach((originalData, i) => {
        if (newData.id == originalData.id) {
            originalData.userName = newData.userName
        }
    })
    json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            return 'error'
        }
    });
    return 'Data updated Successfully'
}

module.exports = {
    updateUserService
}