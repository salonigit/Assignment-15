import fs from "fs"
import path from "path"

const putService = async(req) =>{
    const newData = req.body
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    let obj  = await JSON.parse(data);
    obj.forEach((originalData) => {
        if (newData.id == originalData.id) {
            originalData.name = newData.name
        }
    })
    const json = await JSON.stringify(obj);
    await fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            return "Error";
        }
    });
    return "Data updated Successfully"
}

export default putService