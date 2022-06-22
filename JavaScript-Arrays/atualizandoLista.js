// Desafio: Atualizando elementos
// Crie uma lista com os seguintes nomes: "João", "Ana", "Caio", "Lara", "Majorie", "Leo"
// Porém, Ana e Caio mudaram de escola e Rodrigo entrou na sala. Atualize a lista.

const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Majorie", "Leo"];

// o splice exclui e inseri elementos em um array e pode ter até três parâmetros:
// o primeiro indica em que índice começa a exclusão dos elementos do array
// o segundo indica quantos elementos do array serão excluídos
// e o terceiro, se tiver, indica o elemento que será inserido no array
listaDeChamada.splice(1, 2, "Rodrigo");

console.log(`Lista de chamada atualizada: ${listaDeChamada}`);

// também podemos apenas inserir elementos em um array usando o splice, neste caso
// o primeiro parâmetro indica em que índice será inserido o elemento no array
// o segundo parâmetro, obrigatóriamente deve ser zero (0), indicando que nenhum elemento do array será excluido
// e o terceiro parâmetro é o elemento a ser inserido.

listaDeChamada.splice(3, 0, "Ana");

console.log(`Lista de chamada atualizada: ${listaDeChamada}`);
