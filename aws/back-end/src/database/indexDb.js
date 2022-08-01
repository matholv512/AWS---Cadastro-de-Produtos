const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const conexao = new Sequelize(dbConfig);

const produtos = require("../api/models/produtosModels");

try {
  conexao.authenticate();
  console.log("Conexão estabelecida!!!");
} catch (error) {
  console.log("Conexão não estabelecida!!!");
}

produtos.init(conexao);

module.exports = conexao;
