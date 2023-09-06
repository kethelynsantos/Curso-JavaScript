/*
FALSY - avaliam em falso quando necessário
false (sentido literal)
0
"" '' `` - strings vazias
null / undefined
NaN
(qualquer coisa diferente disse avalia em verdadeiro)

|| o or vai retornar "o valor verdadeiro"
*/
console.log('kethelyn' && undefined && 'maria'); // ele retorna o valor que esta como falso na expressão

// sempre que todas forem avaliadas em falso o valor retornado sera o ultimo valor falso

function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'kethelyn'; // se aqui fosse um valor falso ele faria o curto-circuito e retornaria o valor falso sem executar minha função

console.log(vaiExecutar && falaOi());

// sobre o or
console.log(0 || false || null || 'kethelyn' || true); // aqui ele exibe kethelyn pois o or precisa de apenas um valor verdadeiro para tornar a expressão verdadeira
