const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const getDataService = function (data,id, res) {
    const obj = JSON.parse(data);
    obj.map((doc, i) => {
        if (doc.id == id) {
            return res.json({ message: "data fetched", doc })
        }
    })
    return res.json({ message: "Data Not Found" })
}
const getAllDataService = function (data, res) {
    const obj = JSON.parse(data);
    return res.json({ message: "Data Fetched", obj })

}
const postService = function (data, res,newData) {
    obj = JSON.parse(data);
    obj.users.push(newData);
    json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (error, result) => {
        if (error) {
            res.json({ message: "error" })
            return;
        }
        return res.json({ message: "data created", obj })
    });
}


module.exports = {
    getAllDataService, getDataService, postService, putService, deleteService
}