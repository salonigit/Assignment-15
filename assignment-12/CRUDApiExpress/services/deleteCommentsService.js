import db from '../models'
const Comment = db.comments;

const deleteCommentsService = async (id) => {
  await Comment.destroy({
    where: { id: id }
  })
  return "Deleted Successfull"
}

export default deleteCommentsService
