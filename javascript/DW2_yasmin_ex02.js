// 01 - ARRAYS
let estadosBrasil = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espirito santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Sul", "Rio Grande do Norte", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
]
estadosBrasil.forEach((estado,i)=>{
    console.log(i+1,estado)
})


// 02 - OBJETOS LITERAIS
const eu = {
    nome: "Yasmin",
    idade: 18,
    cidade: "Cajati",
    hobby: "pintar",
    musica: "Réu confesso"
}

console.log()
console.log (`Nome: ${eu.nome}`)
console.log (`Idade: ${eu.idade}`)
console.log (`Cidade: ${eu.cidade}`)
console.log (`Hobby: ${eu.hobby}`)
console.log (`Música preferida: ${eu.musica}`)
console.log()


// 03 - ARRAY DE OBJETOS
const filmes = [{
    titulo: "Eduardo e Mônica",
    genero: "romance",
    ano: 2020,
    classificacao: 12
}, 

{   titulo: "A proposta",
    genero: "comédia romantica",
    ano: 2009,
    classificacao: 14
},
 
{   titulo: "O diabo veste prada",
    genero: "comédia",
    ano: 2006,
    classificacao: 12
}]

filmes.forEach((filme) => {
    console.log(`Titulo: ${filme.titulo}`)
    console.log(`Gênero: ${filme.genero}`)
    console.log(`Ano de lançamento: ${filme.ano}`)
    console.log(`Classificação de idade: ${filme.classificacao}`)
    console.log()
})