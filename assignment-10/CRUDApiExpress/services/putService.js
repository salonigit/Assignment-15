const db = require("../models");
const user = db.users;
const Op = db.Sequelize.Op;

async function putService(req) {
  const id = req.body.id;
  if (!id) {
    return "Please provide id"
  }
  await user.update(req.body, {
    where: { id: id }
  })
  const result = await user.findByPk(id)
  if (!result) {
    return "Please provide valid id"
  }
  return result
}

module.exports = {
  putService
}