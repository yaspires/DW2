import express from 'express' //es6 modules
const router = express.Router()

// Rota clientes
router.get("/clientes", (req,res) => {
    const clientes = [
        {nome: "Ana Silva", cpf: "123.456.789.09", endereco: "Rua das Flores, 123 - bairro Jardim Primavera"},
        {nome: "Ana Silva", cpf: "123.456.789.09", endereco: "Rua das Flores, 123 - bairro Jardim Primavera"},
        {nome: "Ana Silva", cpf: "123.456.789.09", endereco: "Rua das Flores, 123 - bairro Jardim Primavera"},
        {nome: "Ana Silva", cpf: "123.456.789.09", endereco: "Rua das Flores, 123 - bairro Jardim Primavera"}
    ]
    res.render("clientes", { clientes:clientes })
})
export default router