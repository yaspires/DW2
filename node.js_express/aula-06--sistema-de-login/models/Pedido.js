// ORM - sequelize
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// .define -> cria a tabela no banco
const Pedido = connection.define("pedidos", {
    numero: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
  });
  // não força a criação da tabela caso já exista
  Pedido.sync({ force: false });
  export default Pedido;