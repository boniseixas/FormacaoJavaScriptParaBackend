const livros = require('./listaLivros');
const troca = require('./troca');

function insertionSort(lista) {
   
   for(let atual = 0; atual < lista.length; atual++) {
      let analise = atual;
      while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
         //substituindo todo o trecho que foi passado para a função troca(), pela chamada da função
         troca(lista, analise);
         analise--
      }
   }

   console.log(lista);
}

insertionSort(livros);