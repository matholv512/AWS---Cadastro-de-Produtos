const Produtos = require("../models/produtosModels");
const Clients = require("../models/clientsModels");
const { update } = require("./clientsControllers.js");

module.exports = {
  async indexAll(req, res) {
    const produtos = await Produtos.findAll();
    return res.json(produtos);
  },

  async index(req, res) {
    const { client_id } = req.params;
    console.log("Parametro de produto esperado " + client_id);

    const produtos = await Clients.findByPk(client_id, {
      include: {
        association: "client",
      },
    });

    return res.json(produtos);
  },

  async store(req, res) {
    const { client_id } = req.params;
    const {
      prod_codigo,
      prod_nome,
      prod_cor,
      prod_genero,
      prod_marca,
      prod_descricao,
      prod_tamanhode,
      prod_tamanhoate,
      prod_material_externo,
      prod_material_interno,
      prod_material_solado,
      prod_fechamento,
    } = req.body;

    console.log("Parametro esperado: " + client_id);
    console.log("Dados: " + req.body);

    const client = await Clients.findByPk(client_id);

    if (!client) {
      return res.status(400).json({
        error: "Cliente não encontrado!",
      });
    }
    const produtos = await Produtos.create({
      prod_codigo,
      prod_nome,
      prod_cor,
      prod_genero,
      prod_marca,
      prod_descricao,
      prod_tamanhode,
      prod_tamanhoate,
      prod_material_externo,
      prod_material_interno,
      prod_material_solado,
      prod_fechamento,
    });

    return res.json(produtos);
  },

  async update(req, res) {
    const { produtos_id } = req.params;
    const {
      prod_codigo,
      prod_nome,
      prod_cor,
      prod_genero,
      prod_marca,
      prod_descricao,
      prod_tamanhode,
      prod_tamanhoate,
      prod_material_externo,
      prod_material_interno,
      prod_material_solado,
      prod_fechamento,
    } = req.body;

    await Produtos.update(
      {
      prod_codigo,
      prod_nome,
      prod_cor,
      prod_genero,
      prod_marca,
      prod_descricao,
      prod_tamanhode,
      prod_tamanhoate,
      prod_material_externo,
      prod_material_interno,
      prod_material_solado,
      prod_fechamento,
      },
      {
        where: {
          id: produtos_id,
        },
      }
    );

    return res.status(200).send({
      status: 1,
      message: "Produtos atualizados com sucesso!",
    });
  },

  async delete(req, res) {
    const { produtos_id } = req.params;

    const produtos = await Produtos.findByPk(produtos_id);
    if (!produtos) {
      return res.status(400).json({ error: "Produto não encontrado!" });
    } else {
      console.log("produto encontrado!");
    }

    await Produtos.destroy({
      where: {
        id: produtos_id,
      },
    });

    return res.status(200).send({
      status: 1,
      message: "Produtos deletados com sucesso!",
      produtos,
    });
  },
};