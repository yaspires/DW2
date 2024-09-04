// 05 - função anonima
const media = function (nota1,nota2){
    let media = (nota1+nota2)/2;

    if(media<=5){
        console.log(`Você foi reprovado! sua média é ${media}`);
    }else{
        console.log(`Você foi aprovado! sua média é ${media}`);
    };
};
console.log(media(2,7))