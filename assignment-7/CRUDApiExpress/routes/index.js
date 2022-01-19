const express = require('express')
const router = express.Router()
const { getRequest, postRequest, putRequest, deleteRequest, allDataRequest } = require("../controllers/controller")

router.get('/data', getRequest)
router.get('/allData', allDataRequest)
router.post('/data', postRequest)
router.put('/data', putRequest)
router.delete('/data', deleteRequest)

module.exports = router