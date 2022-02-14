module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    name: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.STRING
    }
  });

  return comment;
};
