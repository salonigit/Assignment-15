import file from "../data.json"
import fs from "fs"
import path from "path"

const postService = async ((req)=> {
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
    result = { success: newData}
    return result;
})

module.exports = {
    postService
}
