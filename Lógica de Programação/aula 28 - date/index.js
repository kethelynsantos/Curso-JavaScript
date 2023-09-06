// objeto date
// const data = new Date(); // sempre que utilizamos a palavra new, nós estamos falando com uma função construtora (ela sempre começa com a letra maiuscula)
//console.log(data.toString());

const data = new Date(); // ano, mes, dia, hora, minuto, segundos, ms

const data2 = new Date('2004-11-18 20:13:00'); 
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // mês começa do indice 0
console.log('Ano', data.getFullYear()); 
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 = domingo, 6 = sabado
console.log(Date.now()); // data de hoje em miléssimo de segundos

console.log(data2.toString());