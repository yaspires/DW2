import express from "express";
const router = express.Router();

// Importando o model de Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// ROTA DE CADASTRO DE CLIENTES
router.post("/clientes/new", (req, res) => {
  // RECEBENDO OS DADOS DO FORMULÁRIO E GRAVANDO NAS VARIÁVEIS
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

// ROTA DE EXCLUSÃO DE CLIENTES
// essa rota possui um parâmtero id
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE CLIENTES
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("ClienteEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  // ROTA DE ALTERAÇÃO
  router.post("/clientes/update", (req, res) => {
    const id = req.body.id;
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    Cliente.update(
      { nome: nome, cpf: cpf, endereco: endereco },
      { where: { id: id } }
    )
      .then(() => {
        res.redirect("/clientes");
      })
      .catch((error) => {
        console.log(error);
      });
  });
});

export default router;
