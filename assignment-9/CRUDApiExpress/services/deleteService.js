import file from "../data.json"
import fs from "fs"
import path from "path"

const deleteService = async ((req)=> {
    const id = req.body.id
    var result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    obj = JSON.parse(data);
    const newObj = obj.filter((originalData, i) => {
        return originalData.id != id
    })
    json = JSON.stringify(newObj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            result = { error: "error" }
            return;
        }
    });
    return result = { success: "Deleted Successfully" }
})

module.exports = {
    deleteService
}