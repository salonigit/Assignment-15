import db from '../models'
const user = db.users;

const addUserService = async (req) => {
  const { name, age ,email,password} = req.body;
  if (!email && !password) {
    return "Please provide data"
  }
  const newUser = {
    name: name,
    age: age,
    email:email,
    password:password
  };
  await user.create(newUser)
  return "New user added!";
}

export default addUserService