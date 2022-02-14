module.exports = (sequelize, DataTypes) => {
  const tutorial = sequelize.define('tutorial', {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return tutorial;
}
