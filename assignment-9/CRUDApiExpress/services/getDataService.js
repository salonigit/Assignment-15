import fs from "fs"
import path from "path"

const getDataService = async(req)=> {
    const {id} = req.query
    if (!id) {
        return "Error.Please Provide Id"
    }
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = await JSON.parse(data)
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            return obj[i].name
        }
    }
    return "Error.Given Id is not valid"
}

export default getDataService