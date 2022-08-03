const {edGalho, edFolha} = require('./arrays');

function juntaListas(listaEdFolha, listaEdGalho) {
   let listaFinal = [];
   let posicaoAtualListaEdFolha = 0;
   let posicaoAtualListaEdGalho = 0;
   let atual = 0;

   while(posicaoAtualListaEdFolha < listaEdFolha.length && posicaoAtualListaEdGalho < listaEdGalho.length) {
      let produtoAtualEdFolha = listaEdFolha[posicaoAtualListaEdFolha];
      let produtoAtualEdGalho = listaEdGalho[posicaoAtualListaEdGalho];
      
      if(produtoAtualEdFolha.preco < produtoAtualEdGalho.preco) {
         listaFinal[atual] = produtoAtualEdFolha;
         posicaoAtualListaEdFolha++;
      } else {
         listaFinal[atual] = produtoAtualEdGalho;
         posicaoAtualListaEdGalho++;
      }

      atual++;
   }

   while(posicaoAtualListaEdFolha < edFolha.length) {
      listaFinal[atual] = edFolha[posicaoAtualListaEdFolha];
      posicaoAtualListaEdFolha++;
      atual++;
   }

   while(posicaoAtualListaEdGalho < edGalho.length) {
      listaFinal[atual] = edGalho[posicaoAtualListaEdGalho];
      posicaoAtualListaEdGalho++;
      atual++;
   }

   return listaFinal;
}

console.log(juntaListas(edFolha, edGalho));