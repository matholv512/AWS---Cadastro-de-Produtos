const { Model, DataTypes } = require("sequelize");

class Clients extends Model {
  static init(sequelize) {
    super.init(
      {
        client_id: {
          type: DataTypes.INTEGER,
          field: 'client_id',
          primaryKey: true
        }, 
        client_importid: DataTypes.STRING, 
        client_created: DataTypes.STRING, 
        client_updated: DataTypes.STRING, 
        client_creatorid: DataTypes.STRING, 
        client_created_from_leadid: DataTypes.STRING, 
        client_categoryid: DataTypes.STRING, 
        client_company_name: DataTypes.STRING, 
        client_description: DataTypes.STRING, 
        client_phone: DataTypes.STRING, 
        client_logo_folder: DataTypes.STRING, 
        client_logo_filename: DataTypes.STRING, 
        client_website: DataTypes.STRING, 
        client_vat: DataTypes.STRING, 
        client_billing_street: DataTypes.STRING, 
        client_billing_city: DataTypes.STRING, 
        client_billing_state: DataTypes.STRING, 
        client_billing_zip: DataTypes.STRING, 
        client_billing_country: DataTypes.STRING, 
        client_shipping_street: DataTypes.STRING, 
        client_shipping_city: DataTypes.STRING, 
        client_shipping_state: DataTypes.STRING, 
        client_shipping_zip: DataTypes.STRING, 
        client_shipping_country: DataTypes.STRING, 
        client_status: DataTypes.STRING, 
        client_app_modules: DataTypes.STRING, 
        client_settings_modules_projects: DataTypes.STRING, 
        client_settings_modules_invoices: DataTypes.STRING, 
        client_settings_modules_payments: DataTypes.STRING, 
        client_settings_modules_knowledgebase: DataTypes.STRING, 
        client_settings_modules_estimates: DataTypes.STRING, 
        client_settings_modules_subscriptions: DataTypes.STRING, 
        client_settings_modules_tickets: DataTypes.STRING, 
        client_import_first_name: DataTypes.STRING, 
        client_import_last_name: DataTypes.STRING, 
        client_import_email: DataTypes.STRING, 
        client_import_job_title: DataTypes.STRING, 
        client_custom_field_1: DataTypes.STRING, 
        client_custom_field_2: DataTypes.STRING, 
        client_custom_field_3: DataTypes.STRING, 
        client_custom_field_4: DataTypes.STRING, 
        client_custom_field_5: DataTypes.STRING, 
        client_custom_field_6: DataTypes.STRING, 
        client_custom_field_7: DataTypes.STRING, 
        client_custom_field_8: DataTypes.STRING, 
        client_custom_field_9: DataTypes.STRING, 
        client_custom_field_10: DataTypes.STRING, 
        client_custom_field_11: DataTypes.STRING, 
        client_custom_field_12: DataTypes.STRING, 
        client_custom_field_13: DataTypes.STRING, 
        client_custom_field_14: DataTypes.STRING, 
        client_custom_field_15: DataTypes.STRING, 
        client_custom_field_16: DataTypes.STRING, 
        client_custom_field_17: DataTypes.STRING, 
        client_custom_field_18: DataTypes.STRING, 
        client_custom_field_19: DataTypes.STRING, 
        client_custom_field_20: DataTypes.STRING, 
        client_custom_field_21: DataTypes.STRING, 
        client_custom_field_22: DataTypes.STRING, 
        client_custom_field_23: DataTypes.STRING, 
        client_custom_field_24: DataTypes.STRING, 
        client_custom_field_25: DataTypes.STRING, 
        client_custom_field_26: DataTypes.STRING, 
        client_custom_field_27: DataTypes.STRING, 
        client_custom_field_28: DataTypes.STRING, 
        client_custom_field_29: DataTypes.STRING, 
        client_custom_field_30: DataTypes.STRING, 
        client_custom_field_31: DataTypes.STRING, 
        client_custom_field_32: DataTypes.STRING, 
        client_custom_field_33: DataTypes.STRING, 
        client_custom_field_34: DataTypes.STRING, 
        client_custom_field_35: DataTypes.STRING, 
        client_custom_field_36: DataTypes.STRING, 
        client_custom_field_37: DataTypes.STRING, 
        client_custom_field_38: DataTypes.STRING, 
        client_custom_field_39: DataTypes.STRING, 
        client_custom_field_40: DataTypes.STRING, 
        client_custom_field_41: DataTypes.STRING, 
        client_custom_field_42: DataTypes.STRING, 
        client_custom_field_43: DataTypes.STRING, 
        client_custom_field_44: DataTypes.STRING, 
        client_custom_field_45: DataTypes.STRING, 
        client_custom_field_46: DataTypes.STRING, 
        client_custom_field_47: DataTypes.STRING, 
        client_custom_field_48: DataTypes.STRING, 
        client_custom_field_49: DataTypes.STRING, 
        client_custom_field_50: DataTypes.STRING, 
        client_custom_field_51: DataTypes.STRING, 
        client_custom_field_52: DataTypes.STRING, 
        client_custom_field_53: DataTypes.STRING, 
        client_custom_field_54: DataTypes.STRING, 
        client_custom_field_55: DataTypes.STRING, 
        client_custom_field_56: DataTypes.STRING, 
        client_custom_field_57: DataTypes.STRING, 
        client_custom_field_58: DataTypes.STRING, 
        client_custom_field_59: DataTypes.STRING, 
        client_custom_field_60: DataTypes.STRING, 
        client_custom_field_61: DataTypes.STRING, 
        client_custom_field_62: DataTypes.STRING, 
        client_custom_field_63: DataTypes.STRING, 
        client_custom_field_64: DataTypes.STRING, 
        client_custom_field_65: DataTypes.STRING,
        client_custom_field_66: DataTypes.STRING, 
        client_custom_field_67: DataTypes.STRING, 
        client_custom_field_68: DataTypes.STRING, 
        client_custom_field_69: DataTypes.STRING, 
        client_custom_field_70: DataTypes.STRING,
        createdAt: {
          field: 'createdAt',
          type: DataTypes.DATE,
          allowNull: false,
        },
        updatedAt: {
          field: 'updatedAt',
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "clients",
      },
      // options
   
      
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
