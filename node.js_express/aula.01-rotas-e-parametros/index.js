// Importando o Express na aplicação
const express = require("express"); // commonJS Modules
// Criando uma instancia do express
const app = express();

// npm: instala -- npx: executa

// criando a rota principal
app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

// Rota perfil
// :nome é um parametro obrigatorio e :nome? é um parametro opcional
app.get("/perfil/:nome?", (req, res) => {
  // coletando parametro e guardando a variavel
  const nome = req.params.nome;
  if (nome) {
    // Se o nome = true
    res.send(`Olá, ${nome}! Seja bem-vindo!`);
  } else {
    res.send(`<h2>Faça login para acessar o seu perfil</h2>`);
  }
});

// Rota perfil
app.get("/videos/:playlist?/:video?", (req, res) => {
  const playlist = req.params.playlist;
  const video = req.params.video;
  // verificando se playlist=true e video= undefined
  if (playlist && video == undefined) {
    res.send(`<h2>Você está na playlist de ${playlist}</h2>`);
  }
  if (playlist && video) {
    res.send(`<h2>Você está na playlist de ${playlist}</h2><br>
      reproduzindo o video ${video}...`);
  } else {
    res.send("<h1>Página de vídeos</h1>");
  }
  res.send("<h1>Página de vídeos</h1>");
});

// Iniciando o servidor na porta 8080
app.listen(8080, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log("Servidor iniciado com sucesso!");
  }
});
