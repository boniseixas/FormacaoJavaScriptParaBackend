const listaDeNomes = ["Adriana", "Paulo", "Santo", "Catarina"];

// forEach pode receber mais de um parâmetro.
// poderia receber por exemplo (ImprimeNomes, índice), o índice do array
// é uma boa prática deixarmos o forEach fora da função, quando queremos chamá-lo em mais de uma função
listaDeNomes.forEach(ImprimeNomes);

// o parâmetro da function pode ser nomeado com qualquer nome, assim como, poderia receber o nome da variável listaDeNomes
function ImprimeNomes(numero) {
    console.log(numero);
}