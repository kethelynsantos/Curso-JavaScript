/* ** Potenciação

operador de incremento = ++
operador de decremento = --

*/ 

let contador = 1;
console.log(contador++); // aqui ele primeiro imprimi o valor da variavel e depois adiciona o valor
console.log(contador); // como la em cima ele imprimio depoiis e depois executou o ++ aqui nós ja temos o valor esperado

console.log(++contador); // assim ele primeiro adiciona o valor e depois mostra

let contador1 = 10;
console.log(--contador1); // aqui ele subtrai um do valor da variavel

// uma boa prática seria fazer assim

let contadorExemplo = 1;
contadorExemplo++;
console.log(contadorExemplo);

let contadorExemplo2 = 1;
contadorExemplo2--;
console.log(contadorExemplo2);

let contar = 0;
contar += 2; // contar = contar + 2
console.log(contar)

// convertendo uma string para um numero inteiro 

const num1 = 10;
const num2 = parseInt('5');
console.log(num1 + num2);
// parseInt (inteiro), parseFloat(decimais), Number (ele vai se viarar e colocar o que realmente é)
