const Produtos = require("../models/produtosModels");

module.exports = {
  async indexAll(req, res) {
    const produtos = await Produtos.findAll();
    return res.json(produtos);
  },

  async index(req, res) {
    const { produtos_id } = req.params;
    console.log("Parâmetro produtos esperado " + produtos_id);
    const produtos = await Produtos.findByPk(produtos_id);
    return res.json(produtos);
  },

  async store(req, res) {
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
    }, 
    {
        where: {
          id: produtos_id,
        },
    });
    
    return res.status(200).send({
      status: 1,
      message: "Produto cadastrado com sucesso!",
      produtos,
    });
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
      message: "Produtos atualizado com sucesso!",
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
  },
};
