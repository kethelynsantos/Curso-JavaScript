function retornaHora(data) {
    // faz a checagem invertida para não precisar do else, ou seja, ele já começa verificando o "else"
    if (data && !(data instanceof Date)) {
        throw new TypeError('esperando instância de Date')
    }
    // se a data não for enviada ele gera uma data automatica
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(data); // se vc mandar outro valor aqui vai aparecer o typeerror definido la em cima
    console.log(hora);
} catch(e) {
    // tratar erro da maneira que preferir
    // console.log(e); caso queira mostrar o erro
} finally {
    console.log('tenha um bom dia.');
}
