import db from '../models'
const user = db.userDetails;

const deleteUserService = async (req) => {
  const { id } = req.body;
  if (!id) {
    return "Please enter id"
  }
  await user.destroy({
    where: { id: id }
  })
  return "Deleted Successfull"
}

export default deleteUserService