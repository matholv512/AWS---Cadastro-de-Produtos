const { Model, DataTypes } = require("sequelize");


class Clients extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: DataTypes.NUMBER,
      },
      {
        sequelize,
        tableName: "clients",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Produtos, {
      foreignKey: "client_id",
      as: "client",
    });
  }
}

module.exports = Clients;