const express = require('express')
const file = require("../data.json")
const fs = require("fs")
const path = require('path')
const router = express.Router()


router.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        console.log(__dirname)
        if (err) {
            console.log(err)
            return
        }
        const obj = JSON.parse(data);
        return res.json({ message: "data fetched", obj })
    })
})


router.post('/data', (req, res) => {
    const newData = req.body
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
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
    });
})


module.exports = router