const dbConfig = require("../config/dbConfig.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorials.js")(sequelize, Sequelize);
db.comments = require("./comments.js")(sequelize, Sequelize);
// student.hasMany(subject,{
//   foreignKey:'student_id'
// })
db.tutorials.hasMany(db.comments, {foreignKey:'tutorialId',onDelete: 'cascade',});
// db.comments.belongsTo(db.tutorials, { 
//   as: "tutorial",
//   onDelete: 'cascade',  hooks: true,
// });

module.exports = db;