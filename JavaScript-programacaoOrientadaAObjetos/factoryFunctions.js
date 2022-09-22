// Uma factory function é como chamamos, em JavaScript, uma função que retorna um objeto.
function criaUser(nome, email) {
   return {
      nome,
      email,
      exibeInfos() {
         return `${nome}, ${email}`
      }
   }
}
// A função acima, quando executada com os parâmetros necessários, vai retornar um objeto com duas propriedades (nome, email) e um método interno (exibeInfos())
const newUser = criaUser('Jéssica', 'jes@si.com');
console.log(newUser)
console.log(newUser.exibeInfos())

// As factory functions são diferentes das funções construtoras.
// função construttora:
function User(nome, email) {
   this.nome = nome
   this.email = email

   this.exibeInfos = function() {
      return `${nome}, ${email}`
   }
}
// As funções construtoras devem ser chamadas com o operador new para criar instâncias do objeto User:
const novoUser = new User('Maria', 'm@r.com')
console.log(novoUser)
console.log(novoUser.exibeInfos())
// O retorno no console é praticamente o mesmo, com exceção que agora exibeInfos é uma função anônima e o objeto é explicitamente uma instância de User.
// No caso da factory function não há perda de contexto na execução dos métodos internos.