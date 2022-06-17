// declaração de função
function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao("param");

// expressão de função
// const soma = function(num1, num2) { return num1 + num2 }
// console.log(soma(2, 4));

//  diferença principal???
//  funções e var são listadas no topo do arquivo

console.log(apresentar());

function apresentar() {
    return "Olá"
}

// a expressão de função não pode ser inicializada antes de declarada.
// erro de referência
// console.log(soma(2, 4));
// const soma = function(num1, num2) { return num1 + num2 }


// forma correta
const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(2, 4));
