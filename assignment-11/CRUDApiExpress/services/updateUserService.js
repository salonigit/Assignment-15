import db from '../models'
const user = db.users;

const updateUserService = async (email, req) => {
  if (req.body.email == email) {
    return "Please provide correct email"
  }
  await user.update(req.body, {
    where: { email: req.body.email }
  })
  return "User Updated"
}

export default updateUserService