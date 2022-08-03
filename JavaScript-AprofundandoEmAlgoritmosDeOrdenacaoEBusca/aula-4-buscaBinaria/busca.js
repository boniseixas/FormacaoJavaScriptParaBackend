                              // nome do arquivo importado
const listaLivros = require('./arrayOrdenado');

function busca(relacaoDeLivros, de, ate, valorBuscado) {
   const meioDaRelacaoDeLivros = Math.floor((de + ate) / 2);
   const atual = relacaoDeLivros[meioDaRelacaoDeLivros];

   if(de > ate) {
      return -1;
   }

   if(valorBuscado === atual.preco) {
      return meioDaRelacaoDeLivros;
   }

   if(valorBuscado < atual.preco) {
      return busca(relacaoDeLivros, de, meioDaRelacaoDeLivros - 1, valorBuscado);
   }

   if(valorBuscado > atual.preco) {
      return busca(relacaoDeLivros, meioDaRelacaoDeLivros + 1, ate, valorBuscado);
   }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 32));