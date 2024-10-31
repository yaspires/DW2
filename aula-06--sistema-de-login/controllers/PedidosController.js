import express from "express";
const router = express.Router();

// Importando o model de Pedido
import Pedido from "../models/Pedido.js";
import Auth from "../middleware/Auth.js";

// ROTA PEDIDOS
router.get("/pedidos",Auth,  function (req, res) {
  Pedido.findAll().then((pedidos) => {
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });
});

// ROTA CADASTRO DE PEDIDOS
router.post("/pedidos/new", (req,res) =>{
    const numero = req.body.numero;
    const valor = req.body.valor;
    Pedido.create({
        numero: numero,
        valor: valor,
    }).then(() => {
        res.redirect("/pedidos");
    })
})

// ROTA DE EXCLUSÃO DE pedidos
// essa rota possui um parâmtero id
router.get("/pedidos/delete/:id", (req, res) => {
    // coletar o id que veio na url
    const id = req.params.id;
    // metodo para excluir
    Pedido.destroy({
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

  //ROTA DE EDIÇÃO
  router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id;
    Pedido.findByPk(id)
      .then((pedido) => {
        res.render("PedidoEdit", {
          pedido: pedido,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  
    // ROTA DE ALTERAÇÃO
    router.post("/pedidos/update", (req, res) => {
      const id = req.body.id;
      const numero = req.body.numero;
      const valor = req.body.valor;
      Pedido.update(
        { numero: numero, valor: valor },
        { where: { id: id } }
      )
        .then(() => {
          res.redirect("/pedidos");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  });

export default router;
