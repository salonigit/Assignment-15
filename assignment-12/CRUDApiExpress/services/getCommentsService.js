const db = require("../models");
const Comment = db.comments;

const getCommentsService = async (id) => {
  const result=await Comment.findByPk(id)
  return result
}

export default getCommentsService