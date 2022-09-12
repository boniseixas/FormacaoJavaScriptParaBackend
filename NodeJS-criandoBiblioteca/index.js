import chalk from 'chalk';
import fs from 'fs'; // fs é uma biblioteca nativa do node, por isso, não precisa instalar

function trataErro(erro) {
   throw new Error(chalk.red(erro.code, 'Caminho não encontrado')); // throw lança uma execeção definada pelo usuário
}

// function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//       if(erro) { // Se erro for true (verdadeiro)
//          trataErro(erro);
//       }
//       console.log(chalk.green(texto));
//    })
// }

// Refatorando o bloco de código da linha 8 até a linha 16, para trabalhar de forma assíncrona usando as promises (promessas).
// Promises é a maneira que o JavaScript trabalha com código assíncrono, código que precisa esperar uma determinada ação acontecer para acontecer outra, sem parar a execução do programa
// function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8';
//    fs.promises
//    .readFile(caminhoDoArquivo, encoding)
//    .then((texto) => (console.log(chalk.green(texto)))) // then (então) é um método callback, que diz ao método fs pra lê um arquivo (readFile), então, depois que terminar de ler o arquivo, faça o que for determinado, neste caso, imprimir no console o texto1, na cor verde.
//    .catch((erro) => trataErro(erro)); // catch (pegar), esse método serve para pegarmos um erro, caso ele ocorra.
// }

// pegaArquivo('./lib-nodejs-markdown/texto1.md');


// Utilizando o async e await
async function pegaArquivo(caminhoDoArquivo) {
   const encoding = 'utf-8';
   try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
   } catch(erro) {
      trataErro(erro);
   }
}

pegaArquivo('./lib-nodejs-markdown/texto1.md');


/*
Enquanto .then() e async/await são utilizados quando temos que lidar com promessas já existentes, por exemplo, ao executarmos o método fetch() que, por definição, sempre retorna uma promessa, usamos o construtor Promise() para escrever do zero nossas próprias promessas.
Exemplo de função que recebe um valor booleano (true ou false) e com base nesse valor retorna uma new Promise() rejeitada ou completada:
*/
function promessa(bool) {
   const x = bool;
   return new Promise((resolve, reject) => {
      if(!x) {
         reject(new Error("falha na promessa"));
      }
      resolve("sucesso na promessa");
   });
}

function exibeResposta(textoResult) {
   console.log(textoResult);
}

promessa(true)
.then((texto) => exibeResposta(texto));
