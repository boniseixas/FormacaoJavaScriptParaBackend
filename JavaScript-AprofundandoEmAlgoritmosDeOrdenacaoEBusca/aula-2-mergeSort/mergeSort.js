const listaLivros = require('./array')

function mergeSort(arrayDeLivros) {

   if(arrayDeLivros.length > 1) {
      const meio = Math.floor(arrayDeLivros.length / 2);
      const parte1 = mergeSort(arrayDeLivros.slice(0, meio));
      const parte2 = mergeSort(arrayDeLivros.slice(meio, arrayDeLivros.length));

      arrayDeLivros = ordena(parte1, parte2);
   }

   return arrayDeLivros;
}

function ordena(parte1, parte2) {
   let posicaoAtualParte1 = 0;
   let posicaoAtualParte2 = 0;
   const livrosOrdenados = [];

   while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
      let livroAtualParte1 = parte1[posicaoAtualParte1];
      let livroAtualParte2 = parte2[posicaoAtualParte2];

      if(livroAtualParte1.preco < livroAtualParte2.preco) {
         livrosOrdenados.push(livroAtualParte1);
         posicaoAtualParte1++;
      } else {
         livrosOrdenados.push(livroAtualParte2);
         posicaoAtualParte2++
      }
   }

   // ? = faz a concatenação da parte1 caso a condição seja verdadeira
   // : = faz a concatenação da parte2 caso a condição seja falsa
   return livrosOrdenados.concat(posicaoAtualParte1 < parte1.length 
      ? parte1.slice(posicaoAtualParte1)
      : parte2.slice(posicaoAtualParte2));
}

console.log(mergeSort(listaLivros));