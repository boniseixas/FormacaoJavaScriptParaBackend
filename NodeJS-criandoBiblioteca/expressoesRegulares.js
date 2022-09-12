import chalk from 'chalk';
import fs from 'fs';

function extraiLinks(texto) {
   const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm //toda expressão no regex deve vir entre par de barras (/.../), para que o JavaScript possa fazer a leitura
   // gm (global multilinha)
   // const linksExtraidos = texto.match(regex); // match não é um método de regex, ele é um método de string.
   // refatorando a linha 9 para inserir um método de regex:
   const arrayResultados = [];
   let temp;
   while((temp = regex.exec(texto)) !== null) {
      arrayResultados.push({[temp[1]]: temp[2]})
   }
                                       // if ternario (? :)
   return arrayResultados.length === 0 ? 'não há links' : arrayResultados;
}

function trataErro(erro) {
   throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
   const encoding = 'utf-8';
   try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extraiLinks(texto);
   } catch(erro) {
      trataErro(erro);
   }
}

// pegaArquivo('./lib-nodejs-markdown/texto1.md');

export {pegaArquivo};