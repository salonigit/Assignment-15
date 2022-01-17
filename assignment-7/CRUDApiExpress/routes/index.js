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
    });
})


router.put('/data', (req, res) => {
    const newData = req.body
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
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
    });
})


router.delete('/data', (req, res) => {
    const id = req.body.id
    fs.readFile(path.join(__dirname, '../data.json'), 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
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
    });
})

module.exports = router