import express from "express"
const router = express.Router()
import { mwBasicAuth } from "../middleware/basicAuth"
import { getRequest, postRequest, putRequest, deleteRequest, allDataRequest } from "../controllers/controller"

router.use('/', mwBasicAuth)
router.get('/data', getRequest)
router.get('/allData', allDataRequest)
router.post('/data', postRequest)
router.put('/data', putRequest)
router.delete('/data', deleteRequest)

module.exports = router