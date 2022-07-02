// Desafio - Ponto extra
// Um aluno recebeu um ponto extra em suas notas, adicione esse ponto em suas notas
// 10, 9, 8, 7, 6
const notasGerais = [10, 9, 8, 7, 6];
// a função map sempre vai retornar alguma coisa, enquanto que o froEach não retorna nada
 const notasAtualizadas = notasGerais.map(nota => {
     if(nota == 10) {
         return nota;
     } else {
         return ++nota; // ++ vem na frente do parâmetro (nota), porque primeiro ele soma e depois ele retorna
     }
})

console.log(notasAtualizadas);

// a mesma função com operador ternario
// const notasAtualizadas = notasGerais.map(nota => nota == 10 ? nota : ++nota)
// ++ vem na frente do parâmetro (nota), porque primeiro ele soma e depois ele retorna

// console.log(notasAtualizadas);

// Desafio - Padronizando nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas:
// "ana", "Julia", "Caio SANTOS", "vinicius", "BIA silva"
let listaDeNomes = ["ana", "Julia", "Caio SANTOS", "vinicius", "BIA silva"];

// o método toUpperCase transforma letras minúsculas em maiúsculas
const nomesAtualizados = listaDeNomes.map(nome => nome.toUpperCase());

console.log(nomesAtualizados);

const nomeDoAluno = "Bonifacio Sousa";
let nomeMaiusculas = "";

for (let i = 0; i < nomeDoAluno.length; i++) {
    nomeMaiusculas += nomeDoAluno[i].toUpperCase();
}

console.log(nomeMaiusculas);

const nomeDoCurso = "Fundamentos de JS";
const nomeDaPlataforma = "Alura";

const nomeCompleto = nomeDoCurso.concat(nomeDaPlataforma);
console.log(nomeCompleto);

// O JavaScript traz vários métodos e funções callback diversos, não apenas para uso com arrays.
// Porém a estrutura da função se mantém similar.

const arrayNums = [1, 2, 3, 4];
function multiplicaPorDez(num) {
    return num * 10;
}

const arraySoma = arrayNums.map(multiplicaPorDez);

console.log(arraySoma);

// output: [ 10, 20, 30, 40 ]