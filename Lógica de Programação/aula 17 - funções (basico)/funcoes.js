// criando uma função basica
function saudacao(nome) { // essa função pode ou não receber um parametro, nesse caso ela esta recebendo nome como parametro e enviando esse parametro na execução da função
    console.log(`Boa noite ${nome}!`);
}

saudacao('kethelyn'); // aqui eu estou chamando a função e passando meu nome para ela como parametro

// eu também posso armazenar essa função em uma variavel mas ela não tera nenhum valor pois a função não esta retornando nada
const variavel = saudacao('kethelyn');
console.log(variavel); // dessa maneira ela recebe a função e executa ela mas depois me retorna undefined pois ela não retorna nenhum valor

function saudacao2(nome) { // dessa maneira ela esta me retornando o valor 12345, então assim como antes ela vai executar normal mas em baixo vai me passar esse valor
    console.log(`Boa noite ${nome}!`);
    return 12345
}
const variavel2 = saudacao2('kethelyn');
console.log(variavel2);

// esse return não é o ideal, o ideal seria assim
function saudacao3(nome) { 
    return `Boa noite ${nome}!`;
}
const variavel3 = saudacao3('kethelyn');
console.log(variavel3);

// função que faz uma soma
function soma(x = 1, y = 1) { // aqui eu posso declarar o y e o x como 1 porque caso o usuario não digite nenhum numero eles assumem esses valores
    const resultado = x + y;
    return resultado
}

console.log(soma(2, 2));

// fazendo uma função onde uma variavel recebe uma função

const raiz = function (n){
    return n ** 0.5;
}

console.log(raiz(9));

// criando uma funçãop de maneira mais moderna (arrow function)
const raiz2 = (n) =>{
    return n ** 0.5;
};

console.log(raiz2(9));

/* quando eu tenho só uma linha na minha função eu posso eliminar as 
chaves, o ponto e virgula, o return e quando eu tenho só um parametro na 
função eu tbm posso eliminar o parentese
*/
const raiz3 = n => n ** 0.5;
console.log(raiz3(9));
