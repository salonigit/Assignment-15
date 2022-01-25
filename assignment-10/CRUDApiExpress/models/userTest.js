module.exports = (sequelize, Sequelize) => {
    const userDetails = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
    });
  
    return userDetails;
  };  