// alternativa parfa usar aspas duplas dentro de aspas duplas

let umaString = "um \"texto\""; // com a barra invertida vc escapa o caracter

console.log(umaString);

// strings são indexadas, ou seja, são interaveis, cada caracter tem um index

let umaString1 = "um texto";

console.log(umaString1[4]); // se colocar um range fora do numero de caracters vai dar undefined

// uma outra função que podemos utilizar para pegar um elemento de determinado indice é o charAt

console.log(umaString1.charAt(6)); // se vc sair do range vc tera um valor vazio

// função .concat concatena as strings mas o + é melhor para concatenar ou melhor ainda o tamplate string ${}
// o indexof te mostra onde começa a palavra que vc esta buscando

console.log(umaString1.indexOf('texto'));

console.log(umaString1.indexOf('o', 3)); // aqui vc coloca de qual indice vc quer que ele comece a procurar

console.log(umaString1.lastIndexOf('o', 1)); // aqui ele começa a contar de tras para frente

// expressão regular

console.log(umaString1.match(/[a-z]/g)); // ele retorna todas as letras minusculas desse texto

// o match ele encontra nesse caso um array pois foi colocado a flag g ali

// o search é parecido com o indexof pois ele retorna um index, mas ele aceita epressões regulares

console.log(umaString1.search(/x/));

// no replace vc pode usar ou não expressões regulares

console.log(umaString1.replace('um', 'outra')); // a palavra um é substituida por outra, vc tbm pode usar uma expressão regular como (/um/, 'outra)

// aqui esta um exemplo de como substituir toda letra r do texto0 por uma #
// console.log(umaString.replace(/r/g, '#));

//atributo para saber o tamanho da string

console.log(umaString1.length);

// usando o slice vc pode pegar um trecho de um texto mandando de onde começa e onde termina

console.log(umaString1.slice(1, 6)); // se vc usar um numero negativo pensa que vc esta pegando o tamanho real da string menos a quantidade que vc esta pedindo aqui

// para dividir uma string em arrays vc pode utilizar o split

console.log(umaString1.split(' ')); // aqui vc está dividindo pelos espaços, vc pode colocar uma letra e ele ira dividir pela letra, mas se lembre que essa letra não irá aparecer

console.log(umaString1.split(' ', 2)); // vc esta dizendo que quer dividir assim apenas 2 vezes

// no w3schools.com vc encontra uma documentação de js e ou muito bom é o MDN Javascript

