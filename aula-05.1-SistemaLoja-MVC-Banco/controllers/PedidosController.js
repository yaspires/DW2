import express from "express";
const router = express.Router();

// Importando o model de Cliente
import pedidos from "../models/Pedido.js";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  pedidos.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

// ROTA CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req,res) =>{
    const numero = req.body.numero;
    const valor = req.body.valor;
    pedidos.create({
        numero: numero,
        valor: valor,
    }).then(() => {
        res.redirect("/pedidos");
    })
})

// ROTA DE EXCLUSÃO DE CLIENTES
// essa rota possui um parâmtero id
router.get("/pedidos/delete/:id", (req, res) => {
    // coletar o id que veio na url
    const id = req.params.id;
    // metodo para excluir
    pedidos.destroy({
      where: {
        id: id,
      },
    })
      .then(() => {
        res.redirect("/pedidos");
      })
      .catch((error) => {
        console.log(error);
      });
  });

export default router;
