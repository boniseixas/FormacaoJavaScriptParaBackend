// let A = "";
// console.log(A);
// A = "Olá"

// Três formas de criar funlçoes

// 1. DECLARAÇÃO DE FUNÇÃO
// declara a função
function imprimeTexto(texto) {
    console.log(texto);
}

// executa/chama a função
imprimeTexto("Chamando a função");
imprimeTexto(soma());

function soma() {

    // return deve ser a última linha do bloco
    return 3 + 5;
}

console.log(soma());