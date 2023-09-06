function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000); // o js recebe em milessimo de segundos, então o formato segundo tem que ser convertido para milléssimo
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    }); // recebe os segundas, cria a data e retorna a data criada
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0; // quando eu pauso e depois inicio essa variavel mantem o estado em que estava o relogio, ou seja se eu pausei com 2 segundos e dpois iniciei de novo vai continuar no dois e não comecar desde o zero
  let timer; // criando ess variavel para a função inicia relogio atualizar essa variavel, eu não poderia fazer isso invertido como criar uma variavel dentro da função e acessar de fora, mas eu posso fazer assim
  
  // assim que eu clicar em iniciar eu vou precisar de uma função que inicie meu relógio
  function iniciaRelogio() {
    timer = setInterval(function () { // a cada um segundo vai somar um segunda na variavel e atualizar no html
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos); // essa função formata os segundos
    }, 1000);
  }

  document.addEventListener('click', function (e) { // para não precisar gastar a performance do programa usando varios addeventlistener, podemos criar uma função anonima pegar o evento
    const el = e.target; // usamos o e.target para mostrar quais elementos estão sendo clicados
    // agora é usado uma condicional para executar as funções criadas antes quando determinado elemento for clicado, assim ao inves de capturar o evento para cada elemento eu deixo em aberto para executar quando esses elemento forem clicado semprecisar captuarar um de cada
    if (el.classList.contains('zerar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0; // aqui preciso falar que a minha variavel segundos voltou a ser zero para zerar o estado da variavel
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado'); // quando o relogio iniciar a classe pausado vermelha vai ser removida
      clearInterval(timer); // quando eu clicar em iniciar eu preciso garantir que não tenha nenhum time rodando, aqui eu garanto que eu não crie dois timer na mesma página
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado'); // quando o relogio for pausado a classe ausado vermelha sera adicionada
    }
  });
}
relogio();



/* aqui é o código antigo que utiliza mais linhas de código e pode prejudicar a performance do programa.
Nesse código a gente seleciona os botões do html para 'capturar' e poder utiliza-los
depois utilizamos um add.event.listener para chamar o evento click, criar uma função anonima para executar
a função daquele botão, mas podemos simplificar isso, por isso fizemos o outro código que 
envolve tudo dentro de uma função chamada relógio, não captura cada botão pq ele utiliza do add.event.listener para capturar o evento
utilizando o e.target que basicamente captura o elemento que é selecionado no html, dessa maneira quando o usuario clicar em determinado 
botão o target vai identificar o que foi selecionado e podemos utilizar uma condicional para dar funções para quando
determinado elemento for selecionado, assim evitamos de ter que selecionar os botões e fazer uma função anonima para cada um deles

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000); // o js recebe em milessimo de segundos, então o formato segundo tem que ser convertido para milléssimo
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  }); // recebe os segundas, cria a data e retorna a data criada

}

// como capturar um evento de clique
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0; // quando eu pauso e depois inicio essa variavel mantem o estado em que estava o relogio, ou seja se eu pausei com 2 segundos e dpois iniciei de novo vai continuar no dois e não comecar desde o zero
let timer; // criando ess variavel para a função inicia relogio atualizar essa variavel, eu não poderia fazer isso invertido como criar uma variavel dentro da função e acessar de fora, mas eu posso fazer assim

// assim que eu clicar em iniciar eu vou precisar de uma função que inicie meu relógio
function iniciaRelogio() {
  timer = setInterval(function () { // a cada um segundo vai somar um segunda na variavel e atualizar no html
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos); // essa função formata os segundos
  }, 1000);
}

iniciar.addEventListener('click', function (event) { // aqui estamos capturando um click, para isso colocamos o que queremos capturar depois vem uma função que recebe um evento
  relogio.classList.remove('pausado'); // quando o relogio iniciar a classe pausado vermelha vai ser removida
  clearInterval(timer); // quando eu clicar em iniciar eu preciso garantir que não tenha nenhum time rodando, aqui eu garanto que eu não crie dois timer na mesma página
  iniciaRelogio();

});

pausar.addEventListener('click', function (event) { // aqui estamos capturando um click, para isso colocamos o que queremos capturar depois vem uma função que recebe um evento
  relogio.classList.add('pausado'); // quando o relogio for pausado a classe ausado vermelha sera adicionada
  clearInterval(timer);
});

zerar.addEventListener('click', function (event) { // aqui estamos capturando um click, para isso colocamos o que queremos capturar depois vem uma função que recebe um evento
  clearInterval(timer);
  relogio.innerHTML = '00:00:00';
  relogio.classList.remove('pausado');
  segundos = 0; // aqui preciso falar que a minha variavel segundos voltou a ser zero para zerar o estado da variavel
});
 */