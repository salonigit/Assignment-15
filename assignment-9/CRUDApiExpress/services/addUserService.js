import fs from 'fs'
import path from 'path'

const addUserService = async function (req) {
    const newData = req.body
    if(!(newData.userName && newData.password)){
        return "Please enter username and password"
    }
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = JSON.parse(data);
    obj.push(newData);
    json = JSON.stringify(obj);
    fs.writeFileSync(path.join(__dirname, '../data.json'), json, 'utf8', function (err) {
        if (err) {
            result = 'Error'
        }
    })
    return newData;
}

module.exports = {
    addUserService
}