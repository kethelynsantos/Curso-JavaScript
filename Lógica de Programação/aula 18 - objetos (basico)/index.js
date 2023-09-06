// para criar um objeto nós utilizamos chaves

const pessoa1 = {
    nome: 'kethelyn',
    sobrenome: 'machado',
    idade: 18
};

// agora para acessar elementos desse objeto vamos utilizar a notação de ponto
console.log(pessoa1.nome);

// para melhorar o codigo nos podemos criar uma função que crie os objetos para mim
function criaPessoa (nome, sobrenome, idade) {
    return { // aqui a função retorna um objeto
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa = criaPessoa('kethelyn', 'machado', 18); // aqui é passado argumentos para o parametro (argumento é o valor passado para o parametro)

//quando temos repetições assim, nós não precissamos colocar o =
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

// podemos ter funçoes dentro do objeto
const pessoaFuncao = {
    nome: 'kethelyn',
    sobrenome: 'machado',
    idade: 18,

    fala () { // aqui vc não precisa da palavra function
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`)
    }
};
