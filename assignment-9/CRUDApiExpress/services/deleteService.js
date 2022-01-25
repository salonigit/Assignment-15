import fs from "fs"
import path from "path"

const deleteService =async (req)=> {
    const {id} = req.body
    if(!id){
        return "Please enter id"
    }
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = await JSON.parse(data);
    const newObj = obj.filter((originalData) => {
        return originalData.id != id
    })
    const json = await JSON.stringify(newObj);
    await fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (err, res) => {
        if (err) {
            return;
        }
    });
    return "Deleted Successfully" 
}

export default deleteService