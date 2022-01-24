import getDataService from "../services/getDataService"
import getAllDataService from "../services/getAllDataServices"
import postService from "../services/postService"
import putService from "../services/putService"
import deleteService from "../services/deleteService"

const getRequest = ((req, res) =>{
    let result =getDataService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const allDataRequest = ((req, res) =>{
    let result =  getAllDataService();
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const postRequest = ((req, res) =>{
    let result = postService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const putRequest = ((req, res) =>{
    let result = putService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const deleteRequest = ((req, res) =>{ 
    let result =  deleteService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}