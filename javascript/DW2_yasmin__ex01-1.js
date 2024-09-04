// 01 - função simples
const nome = "Yasmin"
const idade = 18
const cidade = "Cajati"

function dados(){
    console.log(`Nome: ${nome}; idade: ${idade}; cidade: ${cidade}.`)
}
dados()

//////////////////////////////////////////////////////////////
// 02 - função com parametros
function divisao(n1,n2){
    let resultado = n1/n2
    console.log(`O resultado da divisão foi ${resultado}`)
}
divisao(8,4)

//////////////////////////////////////////////////////////////
// 03 - função com retorno
function multiplicacao(n1,n2,n3){
    return n1*n2*n3
}
console.log(`O resultado da multiplicação é ${multiplicacao(2,4,3)}`)

/////////////////////////////////////////////////////////////
// 04 - função com mais de um retorno
function maiorMenor(Idade){
    if (Idade>=18) {
        return `maior de idade`
    }else{
        return `menor de idade`
    }
}

let Idade = 19
console.log(`Você pessoa é ${maiorMenor(Idade)}`)