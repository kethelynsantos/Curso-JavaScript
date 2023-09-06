// atribuição por desestruturação
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// caso a desestruturação fosse ser feita com let teria que ser tudo let, como é const tem que ser tudo const
const [primeiroNumero, segundoNumero, ...resto] = numeros; // aqui é como seu eu estivesse pegando os indices [0, 1]
// para pegar o resto do array é só colocar tres ponto ... e colocar o nome da variavel como por exemplo resto
// ...rest(operator) ...spread(operator) como o rest vc pega o resto e com o spread vc espalha
console.log(primeiroNumero, segundoNumero);
console.log(resto);

// para pular algum que vc não queira pegar basta preencher com espaços vazios
const [um, , tres, , cinco] = numeros;
console.log(um, tres, cinco);

/* agora se vc tem um array com outros arrays dentro, vc primeiro tem que acessar qual array vc quer que esta 
dentro do array primcipal, por exemplo, temos um array com 3 arrays dentro, vc pega e escolhe que vc quer o array 
1 dessa maneira (numeros[1]) usamdo o indice dele e para acessar os indices dentro desse array vc precisa dar o valor de 2 
indices como (numeros[1][2]) dessa maneira vc vai estar acesando o indice de um array que esta dentro de outro array e pegando 
apenas um valor especifico de acordo com o indice dele */

// uma maneira de pegar dados de arrays dentro de outros arrays pela desestruturação
const numeros1 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]; // aqui temos um array com outros arrays dentro dele
const [lista1, lista2, lista3] = numeros; // aqui estamos acessando os tres arrays
console.log(lista3[2]);

