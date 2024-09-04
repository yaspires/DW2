// CLASSE, DATA E MOEDA

// OBJETO LITERAL
const carro = {
  //ATRIBUTOS
  marca: "ford",
  modelo: "Focus",
  ano: 2014,
  //METODOS
  buzinar() {
    return "beep! beep!";
  },
};

console.log(carro.marca, carro.modelo);
console.log(carro.buzinar());

// CLASSE
class Carro {
  //Atributos
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  // Etodos
  buzinar() {
    return "Beep! Beep!";
  }
}

// CRIANDO UMA INSTANCIA PARA O OBJETO DA CLASSE CARRO
//const carroPopular = new Carro("Ford", "Focus", "2014")
const carroPopular = new Carro();
carroPopular.marca = "Ford";
carroPopular.modelo = "Focus";
carroPopular.ano = 2014;
console.log(
  carroPopular.marca,
  carroPopular.modelo,
  carroPopular.ano,
  carroPopular.buzinar()
);

const carroEsportivo = new Carro("Chevrolet", "Camaro", 2024);
console.log(
  carroEsportivo.marca,
  carroEsportivo.modelo,
  carroEsportivo.ano,
  carroEsportivo.buzinar()
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MANIPULANDO DATAS NO JAVASCRIPT
// CRIANDO UMA INSTANCIA DA CLASSE DATE DO JAVASCRPT (para utilizar os seus metodos)
const dataAtual = new Date();

// PEGAR O DIA ATUAL
const dia = dataAtual.getDate();
console.log(`Hoje é dia ${dia}!`);
// PEGAR O MES ATUAL
const mês = dataAtual.getMonth() + 1;
console.log(`Estamos no mês ${mês}!`);
// PEGAR O ANO ATUAL
const ano = dataAtual.getFullYear();
console.log(`Estamos no ano ${ano}!`);
console.log(`hoje é ${dia}/${mês}/${ano}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// manipulando moedas no javascript
let salario = 2500.3;
console.log(salario);

// toFixed - define o numero de casas decimais
console.log(salario.toFixed(2));

// .replace
console.log(salario.toFixed(2).replace(".", ","));

// .toLocacleString - faz a formatação para determinada moeda
// REAL
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
);
// DOLAR
console.log(
  salario.toLocaleString("en", { style: "currency", currency: "USD" })
);
// EURO
console.log(
  salario.toLocaleString("pt-br", { style: "currency", currency: "EUR" })
);

// convertendo real para dolar
let salarioDolar = salario * 0.18;
console.log(
  salarioDolar.toLocaleString("en", { style: "currency", currency: "USD" })
);
/////////////////////////////////////////////////////////////////////////////////
// FORMATANDO STRINGS 

const nome= "Yasmin Pires" 
console.log(nome)

//letras maiusculas - .toUpperCase()
console.log(nome.toUpperCase())

//letras minusculas - .toLowerCase()
console.log(nome.toLowerCase())

//contar letras - .length
console.log(nome.length)

// .length tambem pode ser usuado para contar elementos em arrays
const lista= ["morango","maçã","banana"]
console.log(lista.length)