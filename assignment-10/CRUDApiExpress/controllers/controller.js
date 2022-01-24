import {getDataService} from "../services/getDataService"
import getAllDataService from "../services/getAllDataServices"
import postService from "../services/postService"
import putService from "../services/putService"
import deleteService from "../services/deleteService"

const getRequest =((req, res) =>{
    console.log("==============================================================================================4")
    let result = getDataService(req,res);
    console.log("==============================================================================================1")
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const allDataRequest = ((req, res) =>{
    let result = getAllDataService(res);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const postRequest = ((req, res) =>{
    let result = postService(req,res);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const putRequest = ((req, res) =>{
    let result =  putService(req,res);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const deleteRequest = ((req, res) =>{ 
    let result =  deleteService(req,res);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}