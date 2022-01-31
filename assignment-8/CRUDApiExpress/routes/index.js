const express = require('express')
const router = express.Router()
const { mwBasicAuth } = require("../middleware/basicAuth")
const { getUser, addUser, updateUser, deleteUser } = require("../controllers/controller")

router.post('/addUser', addUser)
router.use('/', mwBasicAuth)
router.get('/getUser', getUser)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)

module.exports = router