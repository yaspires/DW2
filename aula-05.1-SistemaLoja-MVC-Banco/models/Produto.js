// ORM - sequelize
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// .define -> cria a tabela no banco
const Produto = connection.define("produtos", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  preco: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  categoria: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// não força a criação da tabela caso já exista
Produto.sync({ force: false });
export default cliente;