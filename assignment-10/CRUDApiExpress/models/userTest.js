module.exports = (sequelize, Sequelize) => {
    const userDetails = sequelize.define("userDetails", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
    });
  
    return userDetails;
  };  