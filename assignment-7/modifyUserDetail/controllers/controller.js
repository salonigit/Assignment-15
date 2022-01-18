const file = require("../data.json")
const fs = require("fs")
const path = require('path')
const { getAllDataService, getDataService, postService, putService, deleteService } = require("../services/services")

const getRequest = function (req, res) {
    const id = req.query.id
    if (!id) {
        return res.json({ message: "Error. Please Provide Id" })
    }
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            return res.json({ message: "Data Not Found" })
        }
        return getDataService(data,id ,res);
    })
}
const allDataRequest = function (req, res) {
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            return
        }
        return getAllDataService(data, res);
    })
}
const postRequest = function (req, res) {
    const newData = req.body
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
        } else {
            return postService(data, res,newData)
        }
    });
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}