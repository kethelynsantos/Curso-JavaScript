// como criar variaveis

let nome = 'kethelyn'; // jeito antigo (var = nome 'kethelyn';)
console.log(nome, 'nasceu em 2004.');
nome = 'gabrielly' // dizendo que essa variavel vai mudar neste momento do codigo e vai passar a ter outro valor
console.log(nome)

// apenas declarando a variavel sem atribuir um valor
let nome_teste;
nome_teste = 'kethelyn teste';
console.log(nome_teste)


// aula 31

/* let tem escopo de bloco, então se vc declarar uma variavel dentro de um bloco (dentro de chaves) 
com o mesmo nome de uma que esta fora, não daria erro. Dentro do bloco vc esta criando outra variavel que o valor dela 
sera usado naquelo bloco, primeiro o codigo vai procirar o resultado dentro dos blocos e por ultimo no escopo global*/