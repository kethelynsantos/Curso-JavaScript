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
let segundos = 0;

// assim que eu clicar em iniciar eu vou precisar de uma função que inicie meu relógio
function iniciaRelogio() {
    timer = setInterval(function () { // a cada um segundo vai somar um segunda na variavel e atualizar no html
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos); // essa função formata os segundos
    }, 1000);
}

iniciar.addEventListener('click', function (event) { // aqui estamos capturando um click, para isso colocamos o que queremos capturar depois vem uma função que recebe um evento
    alert('')

});


































/* function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function() {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });
}
relogio(); */
