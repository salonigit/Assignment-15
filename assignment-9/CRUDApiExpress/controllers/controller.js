import getDataService from "../services/getDataService"
import getAllDataService from "../services/getAllDataServices"
import postService from "../services/postService"
import putService from "../services/putService"
import deleteService from "../services/deleteService"

const getRequest =async (req, res) =>{
    const result =await getDataService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const allDataRequest =async (req, res) =>{
    const result = await getAllDataService();
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const postRequest = async(req, res) =>{
    const result = await postService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const putRequest = async (req, res) =>{
    const result = await putService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const deleteRequest = async(req, res) =>{ 
    const result = await deleteService(req);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}