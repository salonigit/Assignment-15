const { getDataService } = require("../services/getDataService")
const { getAllDataService } = require("../services/getAllDataServices")
const { postService } = require("../services/postService")
const { putService } = require("../services/putService")
const { deleteService } = require("../services/deleteService")

const getRequest = async function (req, res) {
    let result = await getDataService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
}
const allDataRequest = async function (req, res) {
    let result = await getAllDataService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
}
const postRequest = async function (req, res) {
    let result = await postService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
}
const putRequest = async function (req, res) {
    let result = await putService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
}
const deleteRequest = async function (req, res) {
    let result = await deleteService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}