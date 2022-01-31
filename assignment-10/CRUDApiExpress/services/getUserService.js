import db from "../models"
const user = db.userDetails;

const getUserService = async (req) => {
  const { id } = req.query;
  if (!id) {
    return "Please provide id"
  }
  const result = await user.findAll({where:{id:id}})
  if (!result) {
    return "Please provide valid id"
  }
  return result
}

export default getUserService