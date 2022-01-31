import express from 'express'
const router = express.Router()
import { getUser, addUser, updateUser, deleteUser} from '../controllers/controller'

router.get('/getUser', getUser)
router.post('/addUser', addUser)
router.put('/updateUser', updateUser)
router.delete('/deleteUser', deleteUser)

module.exports = router