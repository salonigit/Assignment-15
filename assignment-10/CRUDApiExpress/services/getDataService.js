const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

const getDataService = function (req,res) {
    const id = req.query.id;
    console.log("==============================================================================================2")
  user.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
    console.log("==============================================================================================3")
}

module.exports = {
    getDataService
}
// const id = req.query.id;
//     let result;
//   Tutorial.findByPk(id)
//     .then(data => {z
//       if (data) {
//           result={sucess:data}
//       } else {
//         res.status(404).send({
//           result = {error:`Cannot find Tutorial with id=${id}.`}
//         });
//       }
//     })
//     .catch(err => {
//       res.status(500).send({
//         result={error:"Error retrieving Tutorial with id=" + id}
//       });
//     });
//     return result;