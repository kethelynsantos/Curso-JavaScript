const alunos = ['luiza', 'maria'];

alunos[alunos.length] = 'fabio'; // adicionando elementos ao final do array

// outra maneira de adicionar elementos ao final do array

alunos.push('luiz');

// para alterar um elemento do seu array basta acessar o indice que vc quer fazer a mudança
alunos[0] = 'kethelyn';

// para adicionar de acordo com o indice é só fazer o mesmo mas usando um indice que ainda não existe
alunos[4] = 'gabrielly';

// adicionando no começo do array sem modificar os elementos (muda apenas os indices)
alunos.unshift('andreia');

// usando o pop o elemento do final do array é removido
alunos.pop();

// dessa maneira vc consegue ver o que foi removido
const removido = alunos.pop();

// para remover do começo
const removido1 = alunos.shift();

// para deletar elementos
delete alunos[1];

// para fatiar assim como fazemos com as strings (ou seja, quero pegar de tal posição até tal posição)
console.log(alunos.slice(0, 2));

console.log(alunos.slice(0, -2)); // usando de maneira negativa ele pega o array começando do primeiro numero que vc colocou menos o numero que vc colocou como negativo

console.log(removido, removido1)

console.log(alunos);
