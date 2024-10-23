// ORM - sequelize
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// .define -> cria a tabela no banco
const cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// não força a criação da tabela caso já exista
cliente.sync({ force: false });
export default cliente;
