// Desafio - For
// Imprima o índice e a lista com os seguintes números:
// 100, 200, 300, 400, 500, 600
const numeros = [100, 200, 300, 400, 500, 600];
for (let i = 0; i < numeros.length; i++) {
    console.log(i, numeros[i]);
}

// Desafio - média
// Calcular a média entre as seguintes notas usando o for:
// 10, 6.5, 8, 7.5
const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);


// Desafio média com ForEach
// Calcular a média entre as seguintes notas usando o ForEach: 10, 6.5, 8, 9
const notasSemestral = [10, 6.5, 8, 9];

let somaDasNotasSemestral = 0;

// forEach é uma função callback, uma função que recebe como parâremtro outra função
notasSemestral.forEach(nota => {
    somaDasNotasSemestral += nota
})

let mediaSemestral = somaDasNotasSemestral / notasSemestral.length

console.log(`Sua média é ${mediaSemestral}`);