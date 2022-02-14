import express from 'express'
import { getComment, getTutorial, addComment, addTutorial, deleteComment, deleteTutorial } from '../controllers/controller'
const router = express.Router()

router.get('/', (req, res) => {
    return res.send('hello this is home page')
  })
router.get('/comment', getComment)
router.get('/tutorial', getTutorial)
router.post('/addComment', addComment)
router.post('/addTutorial', addTutorial)
router.delete('/deleteComment', deleteComment)
router.delete('/deleteTutorial', deleteTutorial)

module.exports = router
