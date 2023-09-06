function meuEscopo() {
  // modo mais moderno para selecionar coisas no js
  const form = document.querySelector(".form"); // a gent seleciona o elemento como nós selecionaria classe no css (podemos utilizar o nome da tag 'form', id ou pela classe)
  // adicionando um evendo
  form.onsubmit = function (evento) {
    // o submit esta sendo capturado e recebendo uma função anonima
    evento.preventDefault(); // 'nesse evento vc previne o que era para acontecer por padrão'
    alert(1);
    console.log("Foi enviado");
  }; // sempre que usar o = vc precisa terminar a frase com ;
}

// meuEscopo();

// outra maneira de cancelar um evento (cancelar o envio do formulario)
// essa maneira é a usada
function meuEscopo2() {
  const form = document.querySelector(".form");

  let contador = 1;
  function recebeEventoForm(evento) {
    evento.preventDefault();
    console.log(`Form não foi enviado ${contador}`);
    contador++;
  }

  // jeito mais moderno (aqui eu digo 'adiciona um escutador de eventos no meu formulário')
  form.addEventListener("submit", recebeEventoForm); // é um metodo e aqui dentro eu coloco qual evento eu quero escutar
}

// meuEscopo2();

function meuEscopo2() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
    // para pegar o valor do input (nome.value)
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>Nome: ${nome.value} Sobrenome: ${sobrenome.value} 
    Peso: ${peso.value} Altura: ${altura.value}</p>`;
  }

  // jeito mais moderno (aqui eu digo adiciona um escutador de eventos no meu formulário)
  form.addEventListener("submit", recebeEventoForm); // é um metodo e aqui dentro eu coloco qual evento eu quero escutar
}

meuEscopo2();
