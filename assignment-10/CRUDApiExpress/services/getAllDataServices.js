const db = require("../models");
const user = db.users;

async function getAllDataService(res) {
  const result = await user.findAll()
  return result
}

module.exports = {
  getAllDataService
}