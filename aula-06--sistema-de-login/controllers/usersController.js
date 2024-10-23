import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/user.js";

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/cadastro", (req, res) => {
  res.render("cadastro");
});

router.post("/createUser", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // verificar se o usuario ja esta cadastrado
  User.findOne({ where: { email: email } }).then((user) => {
    //se não houver
    if (user == undefined) {
        // aqui é feito o cadastro e o hash de senha
    const salt = bcrypt.genSaltSync(10) 
    const hash = bcrypt.hashSync(password,salt)
      User.create({
        email: email,
        password: hash,
      }).then(() => {
        res.redirect("login");
      });
      // caso usuario ja esteja cadastrado
    }else{
        res.send(`Usuário já cadastrado. <br> 
            <a href="/login">Faça o login</a>`);
    }
  });
});

// Rota de autenticação
router.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //busca usuário no banco
  User.findOne({
    where: {
      email: email,
    },
  }).then((user) => {
    // se o usuario estiver cadastrado
    if (user != undefined) {
        // valida a senha (verifica o hash)
        const correct = bcrypt.compareSync(password,user.password)
        // se a senha for valida
        if(correct){
            res.redirect("/");
        //senha nao valida
        }else{
            res.send(`senha inválida! <br> 
                <a href="/login">Tente novamente!</a>`)
        }
      
    } else {
      // se o usuario não existir
      res.send(`Usuário não cadastrado. <br> 
        <a href="/login">Tente novamente!</a>`);
    }
  });
});

export default router;
