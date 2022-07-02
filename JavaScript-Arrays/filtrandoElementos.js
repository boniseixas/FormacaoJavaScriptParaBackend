// Desafio - Filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos
// "Ana", "Marcos", "Maria", "Mauro"
// 7, 4.5, 9, 7.5
const nomes = ["Ana", "Marcos", "Maria", "Mauro"];
const notas = [7, 4.5, 9, 7.5];

// _ (underlaine), pode ser inserido a frente de um parâmetro quando ele não é invocado na função
const reprovados = nomes.filter((_aluno, indice) => notas[indice] < 5);

const aprovados = nomes.filter((_aluno, indice) => notas[indice] >= 5);

console.log(`Alunos reprovados: ${reprovados}`);

console.log(`Alunos aprovados: ${aprovados}`);