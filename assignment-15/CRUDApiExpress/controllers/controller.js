import getCommentsService from '../services/getCommentsService'
import getTutorialsService from '../services/getTutorialsService'
import addCommentsService from '../services/addCommentsService'
import addTutorialsService from '../services/addTutorialsService'
import deleteCommentsService from '../services/deleteCommentsService'
import deleteTutorialsService from '../services/deleteTutorialsService'

const getComment = async (req, res) => {
    const result = await getCommentsService(req.body.id);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const getTutorial = async (req, res) => {
    const result = await getTutorialsService(req.body.id);
    console.log(result)
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const addComment = async (req, res) => {
    const result = await addCommentsService(req.body.tutorialId, req.body.comment.name, req.body.comment.text);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const addTutorial = async (req, res) => {
    const result = await addTutorialsService(req.body);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const deleteComment = async (req, res) => {
    const result = await deleteCommentsService(req.body.id);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}
const deleteTutorial = async (req, res) => {
    const result = await deleteTutorialsService(req.body.id);
    if (result) {
        return res.send(result)
    }
    return res.send("Error")
}

module.exports = {
    getComment, getTutorial, addComment, addTutorial, deleteComment, deleteTutorial
}
