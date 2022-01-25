const db = require("../models");
const user = db.users;

async function postService(req) {
  if(!req.body.name && !req.body.age){
    return "Please provide data"
  }
  const newUser = {
    name: req.body.name,
    age: req.body.age,
  };
  await user.create(newUser)
  return newUser;
}

module.exports = {
  postService
}
