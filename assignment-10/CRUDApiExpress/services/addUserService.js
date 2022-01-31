import db from '../models'
const user = db.userDetails;

const addUserService = async (req) => {
  const { name, age } = req.body;
  if (!name && !age) {
    return "Please provide data"
  }
  const newUser = {
    name: name,
    age: age,
  };
  await user.create(newUser)
  return newUser;
}

export default addUserService