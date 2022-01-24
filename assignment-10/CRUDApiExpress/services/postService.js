const db = require("../models");
const user = db.user;
const Op = db.Sequelize.Op;

const postService = ((req)=> {
    if (!req.body.title) {
                res.status(400).send({
                  message: "Content can not be empty!"
                });
                return;
              }
            
              // Create a Tutorial
              const newUser = {
                name: req.body.name,
                age: req.body.age,
              };
            
              // Save Tutorial in the database
              user.create(newUser)
                .then(data => {
                  res.send(data);
                })
                .catch(err => {
                  res.status(500).send({
                    message:
                      err.message || "Some error occurred while creating the Tutorial."
                  });
                });
})

module.exports = {
    postService
}
