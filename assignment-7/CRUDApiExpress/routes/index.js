const express = require('express')
const router = express.Router()
const { getRequest, postRequest, putRequest, deleteRequest, allDataRequest } = require("../controllers/controller")

router.get('/data', (req, res) => {
    return getRequest(req, res);
})

router.get('/allData', (req, res) => {
    return allDataRequest(req, res);
})

router.post('/data', (req, res) => {
    return postRequest(req, res);
})

router.put('/data', (req, res) => {
    return putRequest(req, res);
})

router.delete('/data', (req, res) => {
    return deleteRequest(req, res);
})

module.exports = router