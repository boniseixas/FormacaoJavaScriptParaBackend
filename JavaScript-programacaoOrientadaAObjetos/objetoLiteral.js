const user = {
   nome: "Bonifacio",
   email: "bonisousa@algumacoisa.com",
   nascimento: "1984/01/01",
   role: "estudante",
   ativo: true,
   exibirInfos: function() {
      console.log(this.nome, this.email);
   }
}

user.exibirInfos()

const exibir = function() {
   console.log(this.nome)
}

const exibirNome = exibir.bind(user) // bind == ligar
exibirNome()
exibir()

/*
Existem outros dois métodos para manipular o contexto de this:
call() => o método call() executa a função passando valores e parâmetros específicos para serem usados como contexto do thsi. Ou seja, é possível atribuir this diferente do contexto atual ao executar a função.
*/
function exibeInfos() {
   console.log(this.nome, this.email)
}

const usuario = {
   nome: 'Tais',
   email: 'ta@is.com'
}

exibeInfos.call(usuario)
// A função pode ser executada em determinado contexto, mesmo após ser instanciada.

function User(nome, email) {
   this.nome = nome
   this.email = email

   this.exibeInfos = function() {
      console.log(this.nome, this.email)
   }
}

const newUser = new User('Helena', 'hel@mm.com')

const outroUser = {
   nome: "Barbara",
   email: 'bar@b.com'
}

newUser.exibeInfos()
newUser.exibeInfos.call(outroUser)

/*
Também é possível passar parâmetros para call(), no seguinte caso, temos uma função que monta determinada mensagem a partir dos parâmetros nome e email. Se quiséssemos vincular os dados da mensagem a um objeto com dados de usuários, podemos usar call() passando como primeiro parâmetro o constexto a ser considerado como this (no caso, objeto user) e a partir do segundo definimos quais os argumentos
*/
function exibeMensagem(nome, email) {
   console.log(`usuário: ${nome}, email ${email}`)
}

const objetoUser = {
   nome: 'Taysa',
   email: 'tay@sa.com',
   executaFuncao: function(fn) {
      fn.call(objetoUser, this.nome, this.email)
   }
}

objetoUser.executaFuncao(exibeMensagem)

/*
Nesse caso, a função que será executada também está sendo passda como parâmetro de executaFuncao e usamos call() para "chamar" a função com um contexto (this) específico e também argumentos específicos.
*/

/*
apply() => o método apply() funciona de forma semelhante ao call(), porém recebe a lista de argumentos em um array:
*/

function exibeNovaMensagem(nome, email) {
   console.log(`usuário: ${nome}, email ${email}`)
}

const userNovo = {
   nome: 'Jéssica',
   email: "jes@ca.com",
   executaFuncao: function(fn) {
      fn.apply(userNovo, [this.nome, this.email])
   }
}

userNovo.executaFuncao(exibeMensagem)
/*
Usando arrays, é possível passar os argumentos via variável ou até mesmo usando a propriedade arguments que existe internamente em todo objeto.
*/

const admin = {
   nome: "Francisco",
   email: "fr@sc.com",
   role: "admin",
   criarCurso() {
      console.log('curso criado!')
   }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()
/*
Protótipos são métodos do JavaScript que permite a um objeto herdar recursos de outro objeto.
setPrototype leva dois parâmetros, o primeiro parâmetro é o obejto que herda as propriedades, e o segundo parâmetro é o objeto que cede as propriedades
*/
