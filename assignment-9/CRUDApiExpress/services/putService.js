import file from "../data.json"
import fs from "fs"
import path from "path"

const putService = ((req) =>{
    const newData = req.body
    let result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    let obj  = JSON.parse(data);
    obj.forEach((originalData, i) => {
        if (newData.id == originalData.id) {
            originalData.name = newData.name
        }
    })
    let json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            result = { error: "error" }
            return;
        }
    });
    return result = { success: "Data updated Successfully" }
})

export default putService