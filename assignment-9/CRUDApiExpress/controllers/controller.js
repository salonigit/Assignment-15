import getDataService from "../services/getDataService"
import getAllDataService from "../services/getAllDataServices"
import postService from "../services/postService"
import putService from "../services/putService"
import deleteService from "../services/deleteService"

const getRequest = async((req, res) =>{
    let result = await getDataService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const allDataRequest = async((req, res) =>{
    let result = await getAllDataService();
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const postRequest = async((req, res) =>{
    let result = await postService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const putRequest = async((req, res) =>{
    let result = await putService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})
const deleteRequest = async((req, res) =>{ 
    let result = await deleteService(req);
    if (result.error) {
        return res.send(result.error)
    }
    return res.send(result.success)
})

module.exports = {
    getRequest, postRequest, putRequest, deleteRequest, allDataRequest
}