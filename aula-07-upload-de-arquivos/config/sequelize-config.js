//impot o sequelize
import Sequelize from "sequelize";

//Criandos os dados de conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',   
    // comente essa linha na primeira execução
    database: 'galeria',
    timezone: '-03:00'
})

export default connection;