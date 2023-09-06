let numero = Number(prompt('Digite um número: ')); // tranformando a string do prompt em um numero
// numero = Number(numero); outra maneira de tranformar o prompt em um numero
const numeroTitulo = document.getElementById('numero-titulo'); // o id numero-titulo esta sendo pegado e atribuido a variavel numeroTitulo
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

// usando o innerHTML = nós estamos zerando ele e salvando o nosso valor (nós não queremos zerar queremos adcionar mais coisas a ele por isso utilizamos o +=)

texto.innerHTML = ''; // zerando o nosso html antes de adcionar os valores, dessa maneira o "Texto" que deixamos la vai ser limpado
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
