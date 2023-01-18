const Produtos = require("../models/productModels");
const Clients = require("../models/clientsModels");
const { update } = require("./clientsControllers");

module.exports = {
  async indexAll(req, res) {
    const produtos = await Produtos.findAll();
    return res.json(produtos);
  },

  async index(req, res) {
    const { client_id } = req.params;
    console.log("Parametro cliente esperado " + client_id);

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
      prod_status,
      prod_ativo_inativo,
    } = req.body;

    console.log("Parametro esperado: " + client_id);
    console.log("Dados: " + req.body);

    const clients = await Clients.findByPk(client_id);

    if (!clients) {
      return res.status(400).json({
        error: "cliente não encontrado!",
      });
    }
    const produtos = await Produtos.create({
      client_id,
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
      prod_status,
      prod_ativo_inativo,
    });

    return res.json(produtos);
  },

  async update(req, res) {
    const { produtos_id } = req.params;
    const {
      client_id,
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
      prod_status,
      prod_ativo_inativo,
    } = req.body;

    await Produtos.update(
      {
        client_id,
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
        prod_status,
        prod_ativo_inativo,
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
      console.log("Produto encontrado!");
    }

    await Produtos.destroy({
      where: {
        id: produtos_id,
      },
    });

    return res.status(200).send({
      status: 1,
      message: "Produto deletados com sucesso!",
      produtos,
    });
  },
};
