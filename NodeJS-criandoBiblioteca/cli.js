#!/usr/bin/env node // ambiente para execução da lib (#! = shebang, este comando instrui o sistema operacionam=l sobre qual é o tipo de arquivo que será executado e de qual forma (neste caso é do NodeJS). O shebang só é interpretado pelos sistemas Linux e MasOs, o Windows ignora este tipo de comando, mas mesmo assim ele é necessário para que a instalação da lib e dos arquivos necessários do Node JS seja feita de forma correta).
import chalk from 'chalk';
import {pegaArquivo} from './expressoesRegulares.js';
import {validaURLs} from './http-validacao.js';
// cli = Command linhe interface, este arquivo é a porta de entrada da aplicação
const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
   const resultado = await pegaArquivo(caminhoDeArquivo[2]);
   if(caminho[3] === 'validar') {
      console.log(chalk.yellow('links validados'), await validaURLs(resultado));
   } else {
      console.log(chalk.yellow('Lista de links'), resultado);
   }
}

processaTexto(caminho); // caminho vem do process.argv