import express from 'express'
const router = express.Router()
import { mwBasicAuth } from '../middleware/basicAuth'
import { getUser, addUser, updateUser, deleteUser } from '../controllers/controller'

router.post('/addUser', addUser)
router.use('/', mwBasicAuth)
router.get('/getUser', getUser)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)

module.exports = router