import db from '../models'
const user = db.users;

const deleteUserService = async (email) => {
  await user.destroy({
    where: { email: email }
  })
  return "Deleted Successfull"
}

export default deleteUserService
