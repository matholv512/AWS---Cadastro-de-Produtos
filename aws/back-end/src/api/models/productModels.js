const { Model, DataTypes } = require("sequelize");

class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: DataTypes.INTEGER,
        prod_codigo: DataTypes.STRING,
        prod_nome: DataTypes.STRING,
        prod_cor: DataTypes.STRING,
        prod_genero: DataTypes.STRING,
        prod_marca: DataTypes.STRING,
        prod_descricao: DataTypes.STRING,
        prod_tamanhode: DataTypes.STRING,
        prod_tamanhoate: DataTypes.STRING,
        prod_material_externo: DataTypes.STRING,
        prod_material_interno: DataTypes.STRING,
        prod_material_solado: DataTypes.STRING,
        prod_fechamento: DataTypes.STRING,
        prod_status: DataTypes.STRING,
        prod_ativo_inativo: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "produtos",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Clients, {
      foreignKey: "client_id",
      as: "client",
    });
  }
}

module.exports = Produtos;
