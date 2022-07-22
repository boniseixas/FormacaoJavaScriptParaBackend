/*
Repetição de código quase sempre é sinal de que o trecho repetido poderia ser extraído para uma função, assim pode ser reaproveitado.
*/
// A função troca vai fazer toda a lógica de substituição de valores dentro de insertionSort().
function troca(lista, analise) {
   //guarda a posição em que o livro de menor preço está
   let itemAnalise = lista[analise];
   let itemAnterior = lista[analise - 1];

   // troca a posição do livro de menor preço
   lista[analise] = itemAnterior;
   lista[analise - 1] = itemAnalise;
}
/*
Como a função troca() está fazendo alterações direto na lista que está sendo passada por parâmetro, assim essa função não precisa retornar nenhum valor.
*/

module.exports = troca;