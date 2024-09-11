const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.render("index")
})

app.set("view engine", "ejs");

app.get("/clientes",(req,res) => {
    res.render("clientes")
})

app.get("/produtos", (req,res) => {
    res.render("produtos")
})

app.get("/pedidos", (req,res) => {
    res.render("pedidos")
})

const port = 4000
app.listen(port, (error) => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
      } else {
        console.log(`Servidor iniciado em http://localhost:${port}`);
      }
})