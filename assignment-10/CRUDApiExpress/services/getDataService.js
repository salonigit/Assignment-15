import db from "../models"
const user = db.users;

const getDataService = async (req) => {
  const { id } = req.query;
  if (!id) {
    return "Please provide id"
  }
  const result = await user.findByPk(id)
  if (!result) {
    return "Please provide valid id"
  }
  return result
}

export default getDataService