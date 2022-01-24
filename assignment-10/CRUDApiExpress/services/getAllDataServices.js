const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

const getAllDataService =((res)=> {
  // const title = req.query.title;
  // var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  user.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
})

module.exports = {
    getAllDataService
}