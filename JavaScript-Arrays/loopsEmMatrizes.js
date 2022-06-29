// Loops em Matrizes
const notas = [9, 8, 10, 6];
let media = 0;

for (let i = 0; i < notas.length; i++) {
    media += notas[i] / notas.length;
}

console.log(`Sua média será ${media}`);

// Para percorrer matrizes, apenas um for não será suficiente
// Podemos usar o for várias vezes, um para cada dimensão da matriz.
// Uma matriz de duas dimensões usurá dois for, um dentro do outro.
const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 8, 7];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media2 = 0;

for (let i = 0; i < notasGerais.length; i++) {
    for (let j = 0; j < notasGerais[i].length; j++) {
        media2 += notasGerais[i][j] / notasGerais[i].length;
    }
}

media2 = media2 / notasGerais.length;

console.log(media2);

/*
No primeiro for criamos uma let i e vamos executar o bloco de código enquanto i for menor que notasGerais.length
Como temos 3 elementos (arrays), o primeir for será executado 3 vezes, com i = 0, i = 1, i = 2.
O segundo for tem uma nova variável, a let j, já que não podemos usar uma nova let i, vamos executá-lo enquanto j for menor que notasGerais[i].length.
Como cada notasGerais[i] é um array, podemos obter a propriedade de tamanho dele utilizando o .length
O codigo dentro do segundo for vai acumular o valor de notasGerais[i][j], lembrando que notasGerais[i] é um dos 3 arrays iniciais.
Assim o parâmetro j vai acessar o elemento dentro do array escolhido pelo notasGerais[i], retornando um número que podemos usar em nossa conta
Para conseguir a média entre todos os arrays, temos que somar as médias dos arrays de notas 8.5, 9.5 e dividir pela quantidade de arrays em notasGerais
*/