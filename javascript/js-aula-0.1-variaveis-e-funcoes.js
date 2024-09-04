// declaração de variaveis no js
// const x let x var

const nome = "yasmin";

var idade;
var idade = 20;
idade = 18;

let cidade;
cidade = "cajati";

console.log(nome);
console.log(idade);
console.log(cidade);

//////////////////////////////////////////////////////
// typeof

const sobrenome = "pires";
const salario = 1200;
let endereco;

console.log(typeof sobrenome);
console.log(typeof salario);
console.log(typeof endereco);

///////////////////////////////////////////////////////
// tipos de funções

// função simples:
function minhaFuncao() {
  console.log("Olá, mundo!");
}
minhaFuncao(); // invocando a função para ser executada

// função com parâmetro/argumento
function saudacao(cidade, nome = "usuário") {
  // cidade é parametro obrigatorio e nome é opcional
  console.log("Olá, bem-vindo, " + nome + " de " + cidade);
}
saudacao("cajati");

function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log("A soma dos dois números foi " + resultado);
}
soma(5, 5);

///////////////////////////////////////////////////////
// função com retorno
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois números foi ${Soma(2, 6)}`);

///////////////////////////////////////////////////////
// função com mais de um retorno
function parImpar(numero) {
  if (numero % 2 == 0) {
    return `par`;
  } else {
    return `impar`;
  }
}
let numero = 4;
console.log(`O número enviado é ${parImpar(numero)}!`);

///////////////////////////////////////////////////////
// função anonima
const dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));


//////////////////////////////////////////////////////
// arrow function parametro unico -> tipo de função anonima
const Dobro = (x) => {
  return x * 2;
};
console.log(Dobro(20));

///////////////////////////////////////////////////////
// arrow function com mais de um parametro
const calculadora = (num1, operador, num2) => {
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`o resultado da operação é ${calculadora(6, `*`, 6)}`)

///////////////////////////////////////////////////////
//função imediata - iife (immediately invoked function expression)
const iife =  (function (){
    console.log(`executando imediatamente`)
})()

// iife com parametro 
const start = (function (app) {
    console.log(`executando imediatamente o app ${app}.`)
})("Whatsapp")


