const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

const deleteService = ((req)=> {s
    const id = req.params.id;

  user.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
})

module.exports = {
    deleteService
}