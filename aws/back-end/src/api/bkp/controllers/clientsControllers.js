const Clients = require("../models/clientsModels");

module.exports = {
  async indexAll(req, res) {
    const clients = await Clients.findAll();
    return res.json(clients);
  },

  async index(req, res) {
    const { client_id } = req.params;
    console.log("Parâmetro de cliente esperado " + client_id);
    const clients = await Clients.findByPk(client_id);
    return res.json(clients);
  },
};