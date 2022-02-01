import db from '../models'
const user = db.users;

const getUserService = async (email) => {
  const result = await user.findByPk(email)
  const ans = { name: result.name, age: result.age, email: result.email, createdAt: result.createdAt, updatedAt: result.updatedAt }
  return ans
}

export default getUserService
