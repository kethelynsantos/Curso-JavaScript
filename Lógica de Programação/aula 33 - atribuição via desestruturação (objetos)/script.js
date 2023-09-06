const pessoa = {
    nome: 'luiz',
    sobrenome: 'mendes',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}; // aqui temos um objeto dentro de outro objeto o que é mto comum

const nomeExemplo = pessoa.nome;
console.log(nomeExemplo);
// aqui temos uma atribuição comum

// atribuiçao por desestruturação
// nessa parte é como se falassemos extrai desse objeto aqui (pessoa) essa chave aqui (nome). Dessa maneira podemos pegar quantas chaves quisermos 
//const { nome, sobrenome, idade } = pessoa; // aqui estamos criando uma variavel com o mesmo nome da chave que estamos buscando, então fivca só isso mesmo
//console.log(nome, sobrenome, idade);

// também podemos colocar um valor para a chave exibir caso ela não exista dentro do objeto
// const { nome = 'não existe no objeto', sobrenome, idade } = pessoa; assim caso não tenha essa chave no objeto ao inves de mostrar undefined ele vai exibir essa mensagem de erro

// tem como renomear o nome da chave dessa maneira aqui
const { nome: teste = 'não existe no objeto' } = pessoa;
console.log(teste);

// para pegar um objeto dentro de outro objeto
const { endereco: { rua, numero }, endereco } = pessoa; // aqui eu estou pegando os valores da rua e do numero que estao dentro do objeto endereco que esta dentro de pessoas e por ultimo pegar o objeto endereco inteiro
console.log(rua, numero, endereco);

// também podemos pegar o resto assim como no array
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto)
