module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define("comment", {
      name: {
        type: DataTypes.STRING
      },
      text: {
        type: DataTypes.STRING
      }
    //   fatherId: {
    //    type: Sequelize.INTEGER,
    //    references: {
    //       model: 'fathers', // 'fathers' refers to table name
    //       key: 'id', // 'id' refers to column name in fathers table
    //    }
    // }
    });
  
    return comment;
  };