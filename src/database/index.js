const { Sequelize } = require('sequelize');
const configDatabase = require('./config');

const { Animal } = require('./database/models/animais');
const { Entrada } = require('./database/models/entrada');
const { Movimentacao } = require('./database/models/movimentacao');
const { Pasto } =  require('./database/models/pastos');
const { User } = require('./database/models/user');

const database = new Sequelize(configDatabase);

Animal.init(database);
Entrada.init(database);
Movimentacao.init(database);
Pasto.init(database);
User.init(database);
module.exports = database;
