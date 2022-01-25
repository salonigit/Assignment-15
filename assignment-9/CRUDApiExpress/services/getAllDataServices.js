import fs from "fs"
import path from "path"

const getAllDataService = async()=> {
    const data = await fs.readFileSync(path.join(__dirname, '../data.json'), 'utf8')
    const obj = JSON.parse(data);
    return obj
}

export default getAllDataService