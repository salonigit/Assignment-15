const db = require("../models");
const Comment = db.comments;

const addCommentsService = async (tutorialId, name, text) => {
  await Comment.create({
    name: name,
    text: text,
    tutorialId: tutorialId,
  })
  return "Sucessfull"
}

export default addCommentsService
