import db from "../models"
const user = db.users;

const putService=async(req)=> {
  const {id} = req.body;
  if (!id) {
    return "Please provide id"
  }
  
  await user.update(req.body, {
    where: { id: id }
  })
  const result = await user.findByPk(id)
  if (!result) {
    return "Please provide valid id"
  }
  return result
}

export default putService