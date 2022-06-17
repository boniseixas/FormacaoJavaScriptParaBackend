// Parâmetros de função
function soma(numero1, nemero2) {
    return numero1 + nemero2;
}

console.log(soma(3, 5));
console.log(soma(8, 9));
console.log(soma(6, 7));

// ordem dos parâmetros de função
function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(48, "Boni"));
console.log(nomeIdade("Boni", 48));

function multiplica(numero1 = 1, numero2 = 1 ) {
    return numero1 * numero2;
}

console.log(multiplica(soma(7, 2), soma(4, 6)));
console.log(multiplica(soma(5, 3)));

// Função sem argumento, sem retorno e sem parâmetro
function cumprimentar() {
    console.log("Como vai pessoal?")
}

cumprimentar();

// Função sem retorno e com parâmetros e argumentos
function cumprimentarPessoa(pessoa) {
    console.log(`Òlá, ${pessoa}`);
}

cumprimentarPessoa('Helena');

// Função com retorno e sem parâmetro (combinar funções)
function saudar() {
    return 'Oi gente!';
}

function saudarPessoa(nomePessoa) {
    console.log(`${saudar()} Meu nome é ${nomePessoa}`);
}

saudarPessoa('Cristal')

// Função com retorno e mais de dois parâmetros
function mathOperation(numero1, numero2, numero3) {
    return (numero1 + numero2) * numero3;
}

console.log(mathOperation(12, 6, 3));