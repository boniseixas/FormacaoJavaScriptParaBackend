import User from './User.js';

export default class Admin extends User {
   constructor(nome, email, nascimento, role = 'admin', ativo = true) {
      super(nome, email, nascimento, role, ativo)
   }

   criarCurso(nomeDoCurso, vagas) {
      return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
   }
}

// const novoAdmin = new Admin('Helena', 'he@l.com', '2022-02-02')
// console.log(novoAdmin)
// console.log(novoAdmin.exibirInfos())
// console.log(novoAdmin.criarCurso('NodeJS', 20))