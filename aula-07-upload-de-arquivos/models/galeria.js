import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Imagem = connection.define("imagens", {
  file: {
    type: Sequelize.STRING,
    allownull: false,
  },
});

Imagem.sync({ force: false });
export default Imagem;
