// Importando o Express na aplicação
//const express = require("express"); commonJS Modules
import express from "express"; //es6 modules
// Criando uma instancia do express
const app = express();

// npm: instala -- npx: executa

//importando os controllers (onde estão as rotas)
import clientesController from "./controllers/clientesController.js";

// criando a rota principal
app.get("/", (req, res) => {
  //sera renderizada a pagina index.ejs que esta na pasta views
  res.render("index");
});

// Definindo ejs como renderizador de página
app.set("view engine", "ejs");

// definir a pasta dos arquivos estaticos (public)
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos controllers
app.use("/", clientesController)

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
