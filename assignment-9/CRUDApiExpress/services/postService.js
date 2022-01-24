import file from "../data.json"
import fs from "fs"
import path from "path"

const postService = ((req)=> {
    const newData = req.body
    var result = {}
    let data = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    let obj = JSON.parse(data);
    obj.push(newData);
     let json = JSON.stringify(obj);
    fs.writeFileSync(path.join(__dirname, '../data.json'), json, 'utf8', function (err) {
        if (err) {
            result = { error: "Error" };
        }
    })
    result = { success: newData}
    return result;
})

export default postService
