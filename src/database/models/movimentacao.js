const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Configure this to your database connection

const Movimentacao = sequelize.define('Movimentacao', {
  id_movimentação: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  id_pasto_entrada: {
    type: DataTypes.INTEGER,
  },
  id_pasto_saida: {
    type: DataTypes.INTEGER,
  },
  id_animal: {
    type: DataTypes.INTEGER,
  },
  quantidade_animais: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Movimentacao;
