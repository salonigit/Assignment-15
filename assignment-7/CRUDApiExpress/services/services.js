const file = require("../data.json")
const fs = require("fs")
const path = require('path')

const getDataService = function (id) {
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            // return res.json({ message: "Data Not Found" })
            return err;
        }
        
    const obj = JSON.parse(data);
    obj.map((doc, i) => {
        if (doc.id == id) {
            // return res.json({ message: "data fetched", doc })
            return "Data fetched";
        }
    })
    // return res.json({ message: "Data Not Found" })
    return "Data not found"
})
}
const getAllDataService = function (data, res) {
    const obj = JSON.parse(data);
    return res.json({ message: "Data Fetched", obj })

}
const postService = function (data, res,newData) {
    obj = JSON.parse(data);
    obj.push(newData);
    json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (error, result) => {
        if (error) {
            res.json({ message: "error" })
            return;
        }
        return res.json({ message: "data created", obj })
    });
}
const putService = function (data, res,newData) {
    obj = JSON.parse(data);
    obj.forEach((originalData, i) => {
        if (newData.id == originalData.id) {
            originalData.name = newData.name
        }
    })
    json = JSON.stringify(obj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (error, result) => {
        if (error) {
            res.json({ message: "error" })
            return;
        }
        return res.json({ message: "data updated", obj })
    });
}
const deleteService = function (data, res,id) {
    obj = JSON.parse(data);
    const newObj = obj.filter((originalData, i) => {
        return originalData.id != id
    })
    json = JSON.stringify(newObj);
    fs.writeFile(path.join(__dirname, '../data.json'), json, 'utf8', (error, result) => {
        if (error) {
            res.json({ message: "error" })
            return;
        }
        return res.json({ message: "data deleted", newObj })
    });
}

module.exports = {
    getAllDataService, getDataService, postService, putService, deleteService
}