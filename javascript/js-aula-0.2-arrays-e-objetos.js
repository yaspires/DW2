// Arrays (vetor ou lista)
let produtos = ["computador", "notebook", "celular", "tablet"];
console.log(typeof produtos);
console.log(produtos);

// EXIBINDO ELEMENTOS DE UM VETOR PELO INDICE (SEM LOOP)
console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);
console.log(produtos[3]);

// EXIBINDO ELEMENTOS DO VETOR COM O FOR (COM INDICES)
for (let c in produtos) {
  // console.log(`${c} - ${produtos[c]}`)
  // Casting converte o tipo da variavel
  console.log(`${Number(c) + 1} - ${produtos[c]}`);
}

//  EXIBINDO ELEMENTOS DO VETOR COM O FOREACH (COM INDICES)
produtos.forEach(function (produto, i) {
  console.log(i, produto);
});

// MÉTODOS DE MANIPULAÇÃO DE VETORES
let listaFrutas = [" laranja", " maçã", " banana"];
console.log(`Nosso vetor é o: ${listaFrutas}`);

// PUSH - insere um novo elemento no FINAL da lista
listaFrutas[3] = " morango"; // adicionando sem o push
console.log(`nosso vetor é o: ${listaFrutas}`);

listaFrutas.push(" abacaxi");
console.log(`nosso vetor é o: ${listaFrutas}`);

//UNSHIFT - INSERE UM NOVO ELEMENTO NO INICIO DA LISTA
listaFrutas.unshift(" pera");
console.log(`nosso vetor é o: ${listaFrutas}`);

//LENGTH - retornar o número de elementos no vetor
let numeros = [6, 8, 2, 9, 3];
console.log(`nosso vetor é o: ${numeros}`);
console.log(`O numero de elementos nesse vetor é ${numeros.length}`);

//SORT - ordena o vetor
console.log(`o primeiro valor do vetor é ${numeros[0]}`);
console.log(`Nosso vetor ordenado é o ${numeros.sort()}`);
console.log(`o primeiro valor do vetor é ${numeros[0]}`);

//////////////////////////////////////////////////////////////////////////////

// OBJETOS LITERAIS (atributos e metodos)
const carro = {
  // atributos
  modelo: "gol",
  cor: "vermelho",

  //metodos
  acelerar() {
    return "Acelerando...";
  },

  Frear() {
    return "freando...";
  },
};
console.log(carro.modelo);
console.log(carro.acelerar());

//OBJETO
const product = {
  nome: "computador",
  marca: "Lenovo",
  preco: "3000",
  descricao: "PC moderno com bom desempenho",
};

console.log(
  `O ${product.nome} da marca ${product.marca}, custa ${product.preco}. ${product.descricao}.`
);

// Array de objeto
const productList = [
  {
    nome: "computador",
    marca: "intel",
    preco: 4000,
    descricao: "PC moderno com bom desempenho",
  },
  {
    nome: "tablet",
    marca: "samsung",
    preco: 2000,
    descricao: "Otima velocidade de processamento",
  },
  {
    nome: "celular",
    marca: "apple",
    preco: 15000,
    descricao: "muito barato",
  },
];
console.log(productList)

// EXIBINDO ARRAY DE OBJETOS COM FOREACH
productList.forEach((product) => {
    console.log(`produto: ${product.nome}`)
    console.log(`marca: ${product.marca}`)
    console.log(`preco: ${product.preco}`)
    console.log(`descricao: ${product.descricao}`)
    console.log()
})
