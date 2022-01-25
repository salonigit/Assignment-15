import db from "../models"
const user = db.users;

const deleteService = async (req) => {
  const { id } = req.body;
  if (!id) {
    return "Please enter id"
  }
  await user.destroy({
    where: { id: id }
  })
  return "Deleted Successfull"
}

export default deleteService