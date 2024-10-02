import express from "express";
const router = express.Router();

// Importando o model de produto
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

// ROTA DE CADASTRO DE PRODUTYOS
router.get("/produtos/new", (req, res) => {
  const nome = req.body.nome;
  const preco = req.body.preco;
  const categoria = req.body.categoria;
  Produto.create({
    nome: nome,
    preco: preco,
    categoria: categoria,
  })
    .then(() => {
      req.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EXCLUSÃO DE PRODUTOS
// essa rota possui um parâmtero id
router.get("/produtos/delete/:id", (req, res) => {
  // coletar o id que veio na url
  const id = req.params.id;
  // metodo para excluir
  Produto.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/produtos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE PRODUTOS
router.get("/produtos/edit/:id", (req, res) => {
  const id = req.params.id;
  Produto.findByPk(id)
    .then((produtos) => {
      res.render("ProdutoEdit", {
        produto: produto,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // ROTA DE ALTERAÇÃO
  router.post("/produtos/update", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const preco = req.body.preco;
    const categoria = req.body.categoria;
    Produto.update(
      { nome: nome, preco: preco, categoria: categoria },
      { where: { id: id } }
    )
      .then(() => {
        res.redirect("/produtos");
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

export default router;
produto