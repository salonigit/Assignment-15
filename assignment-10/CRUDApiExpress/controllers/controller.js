import {getDataService} from "../services/getDataService"
import {getAllDataService} from "../services/getAllDataServices"
import {postService} from "../services/postService"
import {putService} from "../services/putService"
import {deleteService} from "../services/deleteService"

async function getRequest (req,res){
    let result = await getDataService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
async function allDataRequest(req,res){
    let result = await getAllDataService(req);
    console.log(result)
    if (result) {
        return res.send(result)
    }
    else{
    return res.send("Error occured")
    }
}
async function postRequest (req, res) {
    let result = await postService(req);
    if (result) {
        return res.send(result)
    }
    else{
    return res.send("Error occured")
    }
}
async function putRequest (req, res) {
    let result =  await putService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
async function deleteRequest(req, res) { 
    let result =  await deleteService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}