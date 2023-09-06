// capturar o evento de submit do formulario
const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso'); // de quem esta vindo esse evento, quem esta recebendo esse evento
  const inputAltura = e.target.querySelector('#altura'); // de onde eu estou selecionando, eu quero pegar de dentro desse elemento a altura

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true); // setando o resultado com a flag rue
});

function getNivelImc(imc) { // criando um array
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5]; // se eu tenho apenas uma linha de codigo no meu if eu não preciso usar chaves
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP() {
  const p = document.createElement('p'); // criando um elemento
  return p;
}

function setResultado(msg, isValid) { // recebe uma mensagem e se o resultado é valido
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = ''; // zerando o resultado
  // p.classList.add('paragrafo-resultado'); // adicionando uma classe ao paragrafo
  // p.innerHTML = 'Qualquer coisa'; // colocando um html dentro do paragrafo
  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }
  p.innerHTML = msg;
  resultado.appendChild(p); // insere esse elemento em resultado
}
