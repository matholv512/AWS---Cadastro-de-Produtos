const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const conexao = new Sequelize(dbConfig);

const produtos = require("../api/models/produtosModels");
const clients = require("../api/models/clientsModels");

try {
  conexao.authenticate();
  console.log("Conexão estabelecida!!!");
} catch (error) {
  console.log("Conexão não estabelecida!!!");
}

produtos.init(conexao);
clients.init(conexao);

produtos.associate(conexao.models);
clients.associate(conexao.models);

module.exports = conexao;
