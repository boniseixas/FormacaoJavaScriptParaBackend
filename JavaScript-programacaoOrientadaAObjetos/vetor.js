/*
Os paradigmas imperativos são aqueles que usam afirmações para alterar o estado de um programa.
Essa categoria se preocupa com o “como” uma tarefa vai ser executada, o seu passo-a-passo e a sequência dessas etapas.
Um exemplo que mostra o paradigma imperativo é a implementação da seguinte função que recebe um vetor e retorna outro vetor com cada um dos valores dobrado:
*/
function dobra(vetor) {
   let resultados = [];
   for(let i = 0; i < vetor.length; i++) {
      resultados.push(arr[i] * 2);
   }

   return resultados;
}

console.log(resultados[3, 7, 8]);

/*
Outra categoria de paradigma é o declarativo. Podemos dizer que uma característica dele é expressar a lógica de um processo sem descrever o seu controle de fluxo. Ou seja, é associado ao “o quê” uma tarefa vai resultar ou retornar. Um paradigma que pode se encaixar nessa categoria é o paradigma funcional.
Uma implementação declarativa do mesmo problema de dobrar os valores de um vetor pode ser feita da seguinte forma:
*/
function dobra(vetor) {
   return vetor.map((item) => item * 2);
}

// Podemos observar que não foi necessário explicitar como iterar sobre o laço de repetição ou atribuir os novos valores.
