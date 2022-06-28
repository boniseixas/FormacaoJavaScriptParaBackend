// Desafio: Lista com 2 dimensões
// Crie uma lista com os seguintes nomes: "João", "Juliana", "Caio", "Ana"
// Crie outra lista com as seguintes médias: 10, 9, 7.5, 8
// Crie uma lista com duas dimensões com nomes e as médias

const alunos = ["João", "Juliana", "Caio", "Ana"];

const mediasDosAlunos = [10, 9, 7.5, 8];

// Um array de duas dimensões, é um array que contém dois arrays
// E neste array de duas dimensões, o primeiro elemento está no índice 0 e o segundo está no índice 1.
let listaDeAlunosENotas = [alunos, mediasDosAlunos];

console.log(`${listaDeAlunosENotas[0][0]}, sua média é ${listaDeAlunosENotas[1][0]}`);

const idades = [30, 35, 28];
const nomes = ["Camila", "Bárbara", "Carlos"];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(`${funcionarios[0][1]} sua idade é ${funcionarios[1][1]}`);
console.log(`${funcionarios[0][0]} faz faculdade? ${funcionarios[2][1]}`);
