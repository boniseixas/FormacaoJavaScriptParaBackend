import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';

const novoUser = new User('Gabriela', 'gab@ela.com', '2022-01-01')
console.log(novoUser.exibirInfos())


const novoAdmin = new Admin('Rafaela', 'r@f.com', '2021-04-04')
console.log(novoAdmin.nome)

novoAdmin.nome = "Lucas"
console.log(novoAdmin.nome)

const novoUsuario = new User('Pedro', 'Seixas', 'pe@ro.com', '2022-04-04')
console.log(novoUsuario.nome)
novoUsuario.nome = 'Mateus Siva e Sousa'
console.log(novoUsuario.nome)
console.log(novoUsuario.sobrenome)

// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.nomeAdmin())

// novoUser.nome = "Márcia"
// console.log(novoUser.nome)