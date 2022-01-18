const express = require('express')
const router = express.Router()
const { getRequest, allDataRequest ,postRequest} = require("../controllers/controller")

router.get('/data', (req, res) => {
    return getRequest(req, res);
})

router.get('/allData', (req, res) => {
    return allDataRequest(req, res);
})

router.post('/data', (req, res) => {
    return postRequest(req, res);
})

module.exports = router