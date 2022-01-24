const express = require('express')
const router = express.Router()
const { mwBasicAuth } = require("../middleware/basicAuth")
const { getRequest, postRequest,allDataRequest,putRequest,deleteRequest} = require("../controllers/controller")

router.use('/', mwBasicAuth)
router.get('/data', getRequest)
router.get('/allData', allDataRequest)
router.post('/data', postRequest)
router.put('/data', putRequest)
router.delete('/data', deleteRequest)

module.exports = router