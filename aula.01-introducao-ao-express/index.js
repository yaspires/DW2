// Importando o Express na aplicação
const express = require("express"); // commonJS Modules
// Criando uma instancia do express
const app = express();

// criando a rota principal
app.get("/", function(req,res){
    res.send("Hello world! Bem-vindo!")
})

// Iniciando o servidor na porta 8080
app.listen(8080, function (error) {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
