const livros = require('./listaLivros'); // importa o array de objetos do arquivo listaLivros.js

// let maiorValor = 0;

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    
        // if(livros[atual].preco > livros[maiorValor].preco) {
        //     maiorValor = atual;
        // }
    }
    return maisBarato;
}

module.exports = menorValor;

// console.log(`O livro ${livros[maisBarato].titulo} é o de menor preço e custa ${livros[maisBarato].preco}`);

// console.log(`O livro ${livros[maiorValor].titulo} é o de maior preço e custa ${livros[maiorValor].preco}`);