const paragrafos = document.querySelector('.paragrafos'); // selecionando a classe do index
const ps = paragrafos.querySelectorAll('p'); // selecionando todos os paragrafos

// pegando todos os estilos do body
const estilosBody = getComputedStyle(document.body); // função do computador que passamos o elemento que queremos pegar
const backgroundColorBody = estilosBody.backgroundColor; // aqui escolehemos qual o e4stilo que queremos pegar do elemento que selecionamos 
console.log(backgroundColorBody);

// o for of pega o valor 
for (let p of ps) { // aqui estamos interando sobre todos os p que foram selecionados la em cima
    p = backgroundColorBody;
    console.log(p);
}

