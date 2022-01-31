import getUserService from '../services/getUserService'
import addUserService from '../services/addUserService'
import updateUserService from '../services/updateUserService'
import deleteUserService from '../services/deleteUserService'

const getUser = async (email, res) => {
    const result = await getUserService(email);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const addUser = async (req, res) => {
    const result = await addUserService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error occured")
}
const updateUser = async (email, req, res) => {
    const result = await updateUserService(email, req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const deleteUser = async (email, res) => {
    const result = await deleteUserService(email);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}

module.exports = {
    getUser, addUser, updateUser, deleteUser
}