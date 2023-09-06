function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

/* function funcaDoInterval() {
    console.log(mostraHora);
}
eu não preciso dessa função, pois posso usar uma função anonima e ja criala la em baixo
*/

/* quando eu quero trabalhar com intervalo de tempo, eu utilizo a função setinterval
ela vai configurar um intervalo de tempo pra que alguma função seja executada em determinado momento */

// setInterval(funcaDoInterval, 1000); ao inves de executar a função aqui, nós só passamos a referencia, ou seja, não usamos os parenteses que executam a função

// aqui vamos usar uma função anonima que sera criada ali dentro
// precisamos de 2 parametros (referencia e de quanto em quanto tempo eu quero que minha função seja executada)
setInterval(function () {
    console.log(mostraHora());
}, 1000);

// para forçar o codigo a parar de executar (ctrl + shift + m) ou (ctrl + shift + p) e digita 'stop code run'

