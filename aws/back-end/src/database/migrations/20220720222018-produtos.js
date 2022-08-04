"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      prod_codigo: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      prod_nome: {
        type: Sequelize.STRING(120),
        allowNull: false,
      },
      prod_cor: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      prod_genero: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      prod_marca: {
        type: Sequelize.STRING(40),
        allowNull: false,
      },
      prod_descricao: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      prod_tamanhode: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      prod_tamanhoate: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      prod_material_externo: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      prod_material_interno: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      prod_material_solado: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      prod_fechamento: {
        type: Sequelize.STRING(60),
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("produtos");
  },
};
