let telefone = 456456;
console.log("O telefone é " + String(telefone));
// conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// Outra opção para transformarmos um valor em String é usar o .toString():
let cep = 2349801;
console.log("O CEP da rua é " + cep.toString());

// conversão da booleana para string, nesse caso teremos uma string “false”.
// let usuarioConectado = false;
// console.log(String(usuarioConectado));

// agora teremos uma string “true”.
let usuarioConectado = true;
console.log(String(usuarioConectado));

// conversão de textos e booleanos através de Number()
// calcular a area de um retângulo
let largura = "8";
let altura = "7";
// teremos a conversão de String para números, possibilitando a realização da da multiplicação
console.log("A área do retângulo é " + Number(largura) * Number(altura));

// Podemos usar o operador de soma (+) para fazer a conversão de textos para números,
// colocando-os antes das variáveis:
let largura2 = "5";
let altura2 = "6";
console.log("A segunda área é "+ largura2 * + altura2);

// como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
let meuNome = "Bonifacio";
console.log(Number(meuNome));
console.log(+ meuNome);

// conversão da booleana para número, sendo que false (falso) retorna o número 0.
let usuariologado = false;
console.log(Number(usuariologado));
// agora teremos a conversão de true (verdadeiro) para o número 1.
let usuariologado2 = true;
console.log(Number(usuariologado2));