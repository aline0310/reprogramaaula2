///Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, 
//se os números forem iguais, mostre uma mensagem no console "Os números são iguais".

let num1 = 32
let num2 = 50

if (num1 < num2) {
    console.log(`${num1} é maior`)
} else if(num1 > num2) {
    console.log(`${num2} é maior`)
} else if (num1 === num2) {
    console.log(`Os números são iguais`)
}