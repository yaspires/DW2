// Importando o Express na aplicação
const express = require("express"); // commonJS Modules
// Criando uma instancia do express
const app = express();

// npm: instala -- npx: executa

// criando a rota principal
app.get("/", (req, res) => {
  //sera renderizada a pagina index.ejs que esta na pasta views
  res.render("index");
});

// Definindo ejs como renderizador de página
app.set("view engine", "ejs");

// Rota perfil
// :nome é um parametro obrigatorio e :nome? é um parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  res.render("perfil");
});

// Rota videos
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  res.render("videos", { playlist: playlist });
});

//rota produtos
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["computador", "celular", "tablet", "notebook"];
  const produto = req.params.produto;
  res.render(
    "produtos",
    // enviando variavel para a pagina
    // sera chamado na pagina
    {
      produto: produto,
      listaProdutos: listaProdutos, //variavel que esta na index
    }
  );
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
