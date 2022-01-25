const db = require("../models");
const user = db.users;

async function deleteService(req) {
  const id = req.body.id;
  if (!id) {
    return "Please enter id"
  }
  await user.destroy({
    where: { id: id }
  })
  return "Deleted Successfull"
}

module.exports = {
  deleteService
}