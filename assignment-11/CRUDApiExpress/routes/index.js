import express from "express"
import generateToken from "../services/generateToken"
import { consoleRequest } from "../middleware/consoleRequest"
import { getUser, addUser, updateUser, deleteUser } from "../controllers/controller"
const router = express.Router()
const auth = require("../middleware/auth")()

router.use('/', consoleRequest)
router.post('/token', function (req, res) {
    generateToken(req, res)
});

router.get('/getUser', auth.authenticate(), function (req, res) {
    getUser(req.user.email, res)
});

router.post('/signUp', function (req, res) {
    addUser(req, res)
});

router.put('/updateUser', auth.authenticate(), function (req, res) {
    updateUser(req.user.email, req, res)
});

router.delete('/deleteUser', auth.authenticate(), function (req, res) {
    deleteUser(req.user.email, res)
});

module.exports = router