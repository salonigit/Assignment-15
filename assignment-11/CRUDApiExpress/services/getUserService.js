import db from '../models'
const user = db.users;

const getUserService = async (email) => {
  const result =await user.findByPk(email)
  return result 
}

export default getUserService