let num1 = 10;
let num2 = 2.5;

console.log(num1.toString()); // transformando um numero em uma string sem alterar o seu valor inicial (ele continua sendo um numero)
num1 = num1.toString(); // aqui eu estou realmente mudando o valor da variavel para uma string
console.log(num1.toString(2)); // aqui eu terei o valor binário da variavel

let num3 = 10.238237778;

console.log(num3.toFixed(2)); // aqui a gente coloca quantas casas decimais nós queremos que o numero tenha

// para verificar se  aconta deu errado -> console.log(Number.isNaN(temp)); aqui ele ve se aconta é um "not a number"

// arredondando o numero para baixo
let numero1 = 9.78392;
let numero2 = Math.floor(numero1);
console.log(numero2);

// arredondando para cima
let numero3 = Math.ceil(numero1);
console.log(numero3);

// arredondando para o numero mais proximo 
let numero4 = Math.round(num1);
console.log(numero4);

// descobrindo o numero max e min
console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500));
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500));

// numeros aleatórios
const aleatorio = Math.random() * (10 - 5) + 5; // aqui vc defini o maximo e o minimo de numeros que vc quer sortear
const aleatorio2 = Math.round(Math.random() * (10 - 5) + 5); // usando o round aqui nós temos numeros sem casas decimais (inteiros)

// elevar um numero
console.log(Math.pow(2, 10)); // aqui temos 2 elevado a 10
// elvando com o operador
console.log(2 ** 10);

// raiz quadrada
console.log(num1 ** 0.5);

// vendo se o numero é inteiro
console.log(Number.isInteger(num1));
