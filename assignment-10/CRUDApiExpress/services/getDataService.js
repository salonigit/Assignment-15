const db = require("../models");
const user = db.users;

async function getDataService(req) {
  const id = req.query.id;
  if (!id) {
    return "Please provide id"
  }
  const result = await user.findByPk(id)
  if (!result) {
    return "Please provide valid id"
  }
  return result
}

module.exports = {
  getDataService
}