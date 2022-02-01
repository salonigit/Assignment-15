import db from '../models'
const user = db.users;
const bcrypt = require("bcrypt");

const addUserService = async (req) => {
  const { name, age, email, password } = req.body;
  if (!email && !password) {
    return "Please provide data"
  }
  const salt = await bcrypt.genSalt(10);
  const newpassword = await bcrypt.hash(password, salt);
  const newUser = {
    name: name,
    age: age,
    email: email,
    password: newpassword
  };
  await user.create(newUser)
  return "New user added!";
}

export default addUserService
