// operação ternária
// condição ? 'valor para verdadeiro' : 'valor para falso'
const pontUsuario = 1000;
const nivelUsuario = pontUsuario >= 1000 ? 'usuário VIP' : 'usuário normal'; // coloca a condição (?) e o valor se falso (:)
console.log(nivelUsuario);

// mesmo if mas sem esse resumo, deixando o código mais longo
if (pontUsuario >= 1000) {
    console.log('usuário vip');
} else {
    console.log('usuário normal');
}

// setando um valor padrão para uma variavel, ou seja, a gente verifica o valor de uma determinada variavel e se ela for falsa temos um outro valor padrao usando o ou
const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);
