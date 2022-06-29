// Procurando na lista
// Crie uma função que recebe como argumento o nome de um aluno
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado

const alunos = ["Manoel", "Joaquim", "Paulo", "Fábio"];
const mediaDosAlunos = [9, 8.8, 9.5, 8];
let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

// A localização de um elemento dentro de um array, pode ser feito utilizando função.
const exibeNomeENota = (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)) {
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno);
        return listaDeNotasEAlunos[0][indice] + ", sua media é " + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não cadastrado"
    }
}

console.log(exibeNomeENota("Paulo"));
console.log(exibeNomeENota("Boni"));