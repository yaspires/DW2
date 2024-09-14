<<<<<<< HEAD
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
  const nome = req.params.nome;
  res.render("perfil", { nome:nome });
});

// Rota videos
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", { 
  playlist: playlist,
  video:video
 });
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

//rota pedidos
app.get("/pedidos", (req,res) => {
  //array de objetos com os pedidos
  const pedidos = [
    {produto: "celular", valor: 3000},
    {produto: "computador", valor: 4000},
    {produto: "tablet", valor: 2000},
    {produto: "notebook", valor: 3800}
  ]
  res.render("pedidos", { pedidos:pedidos })
});

// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
=======
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
  const nome = req.params.nome;
  res.render("perfil", { nome:nome });
});

// Rota videos
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  res.render("videos", { 
  playlist: playlist,
  video:video
 });
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

//rota pedidos
app.get("/pedidos", (req,res) => {
  //array de objetos com os pedidos
  const pedidos = [
    {produto: "celular", valor: 3000},
    {produto: "computador", valor: 4000},
    {produto: "tablet", valor: 2000},
    {produto: "notebook", valor: 3800}
  ]
  res.render("pedidos", { pedidos:pedidos })
});

// Iniciando o servidor na porta 8080
const port = 8080
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em http://localhost:${port}`);
  }
});
>>>>>>> 8e8bfd660688a19fb283e0b6caad1ba0246f383e
