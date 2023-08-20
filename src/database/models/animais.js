const { DataTypes } = require('sequelize');
const sequelize = require('../config/config'); // Configure this to your database connection

const Animal = sequelize.define('Animal', {
  id_animal: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
  },
});

module.exports = Animal;
