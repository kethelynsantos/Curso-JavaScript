const nome = 'kethelyn';
const sobrenome = 'santos';
const idade = 18;
const peso = 53;
const altura = 1.70;
let imc; // peso / (altura * altura)
let anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2023 - idade;

// template strings (seria usar o ${} entre crase pra mostrar as variaveis) 
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura, seu IMC é de ${imc} e ela nasceu em ${anoNascimento - 1}`);
