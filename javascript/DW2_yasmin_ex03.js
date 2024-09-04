// 01 Manipulação de datas
function mData(){
    const dataAtual = new Date()

    const dia = dataAtual.getDate()+3
    const mês = dataAtual.getMonth()+5
    const ano = dataAtual.getFullYear()+6

    console.log(`A nova data é ${dia}/${mês}/${ano}\n`)
}
mData()

// 02 Formatação de moedas
function formatacao(salario){

    let salarioDolar = salario * 0.20;
    let salarioEuro = salario * 0.19;

    console.log(
      `Seu salário é de ${salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}`
    );
    console.log(
      `Seu salário em dolares é de ${salarioDolar.toLocaleString("pt-br", { style: "currency", currency: "USD" })}`
    );
    console.log(
      `Seu salário em euro é de ${salarioEuro.toLocaleString("pt-br", { style: "currency", currency: "EUR" })} \n`
    );
}
formatacao(1412.27)

// 03 formatação de strings
function fString(nome){
    console.log(`Letras maiúsculas: ${nome.toUpperCase()}`)
    console.log(`Letras minúsculas: ${nome.toLowerCase()}`)
    console.log(`Letras minúsculas: ${nome.length}`)
}
fString("Yasmin Pires")