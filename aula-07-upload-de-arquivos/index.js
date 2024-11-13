import express from "express";
const app = express();

//importando o multer
import multer from "multer"

import connection from "./config/sequelize-config.js"
import Galeria from "./models/galeria.js";

// Realizando a conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Criando o banco de dados s eele não existir
connection
  .query(`CREATE DATABASE IF NOT EXISTS galeria;`)
  .then(() => {
    console.log("O banco de dados foi criado com sucesso");
  })
  .catch((error) => {
    console.log(error);
  });

// Configurações
app.use(express.static("public"));
app.set("view engine", "ejs");

const upload = multer({ dest: "public/uploads/" });

//rota principal
app.get("/", (req, res) => {
  Galeria.findAll(). then(imagens=> {
    res.render("index", {
      imagens:imagens,
    });
  })
});

// rota de upload
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file.filename
  Galeria.create({
    file:file
  })
  res.redirect("/");
});

const port = 8081;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro! ${error}`);
  } else {
    console.log(`servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
