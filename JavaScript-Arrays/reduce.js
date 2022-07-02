// Desafio - média das turmas
// Com a média de todos os alunos de três salas, calcule a média geral de cada sala
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6, 9, 10];
const salaPython = [7, 3.5, 8, 9.5];

// o método reduce() trabalha com dois parâmetros
// o primeiro é a função callback obrigatória para retornar o cálculo
// o segundo parâmetro é um número que representa o valor inicial (no caso, 0 - zero)
function mediaSala(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
    return somaDasNotas / notasDaSala.length;
}

console.log(`Média da sala JavaScript ${mediaSala(salaJS)}`);
console.log(`Média da sala Java ${mediaSala(salaJava)}`);
console.log(`Média da sala Python ${mediaSala(salaPython)}`);

// média com apenas um array
const notas = [9, 8, 9, 7];

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(`A média é ${media}`);

// outra forma de escreve o método reduce(), seria escrever a função callback fora do reduce()
function operacaoNumerica(acum, atual) {
    return atual + acum;
}

const soma = numeros.reduce(operacaoNumerica, 0);