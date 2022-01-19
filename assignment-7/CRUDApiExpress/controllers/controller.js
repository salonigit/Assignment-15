const file = require("../data.json")
const fs = require("fs")
const path = require('path')
const { getAllDataService, getDataService, postService, putService, deleteService } = require("../services/services")

const getRequest = function (req, res) {
    const id = req.query.id
    if (!id) {
        return res.json({ message: "Error. Please Provide Id" })
    }
    const result = getDataService(id);
    if(result==err){
        res.json(error);
    }
    else{
        res.json(result)
    }
    
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
const putRequest = function (req,res) {
    const newData = req.body
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            return putService(data, res,newData);
        }
    });
}
const deleteRequest = function (req, res) {
    const id = req.body.id
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
        } else {
            return deleteService(data, res,id);
        }
    });
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}