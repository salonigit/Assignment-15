const { getUserService } = require('../services/getUserService')
const { addUserService } = require("../services/addUserService")
const { updateUserService } = require("../services/updateUserService")
const { deleteUserService } = require("../services/deleteUserService")

const getUser = async function (req, res) {
    const result = await getUserService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const addUser = async function (req, res) {
    const result = await addUserService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const updateUser = async function (req, res) {
    const result = await updateUserService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const deleteUser = async function (req, res) {
    const result = await deleteUserService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}

module.exports = {
    getUser, addUser, updateUser, deleteUser
}