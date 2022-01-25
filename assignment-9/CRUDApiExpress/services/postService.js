import fs from "fs"
import path from "path"

const postService =async(req)=> {
    const newData = req.body
    const {id}=newData
    if(!id){
        return "Please Enter id"
    }
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    let obj = await JSON.parse(data);
    obj.push(newData);
    const json = await JSON.stringify(obj);
    await fs.writeFileSync(path.join(__dirname, '../data.json'), json, 'utf8', function (err) {
        if (err) {
            return "Error";
        }
    })
    return newData;
}

export default postService
