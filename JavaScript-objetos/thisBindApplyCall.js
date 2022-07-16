/*
Métodos this, bind(), apply(), call()
this significa literalmente "isso" ou "este"
*/
const pessoa = {
    nome: "Ana",
    email: "ana@email.com",
    imprimeNome: function() {
        console.log(`${pessoa.nome}`)
    }
}

pessoa.imprimeNome() // Ana
/*
O método imprimeNome() faz referência ao próprio objeto pessoa. O JavaScript tem uma forma melhor de fazer isso, que não acopla o método ao nome do objeto.
*/
const fulano = {
    nome: "Castanha",
    email: "catanha@email.com",
    imprimeFulano: function() {
        console.log(`${this.nome}`)
    }
}

fulano.imprimeFulano() // Castanha
// desacoplando o método do objeto:
function imprimeNomeEmail() {
    console.log(`nome: ${this.nome}, email ${this.email}`)
}
/*
A função acima não está ligada a nenhum objeto, dessa forma podemos utilizá-la para vários objetos diferentes:
*/
const pessoa1 = {
    nome: "Paixão",
    email: "paixao@amail.com",
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: "Paula",
    email: "paula@email.com",
    imprimeInfo: imprimeNomeEmail
}

pessoa1.imprimeInfo()
// nome: Paixão, email paixao@amail.com
pessoa2.imprimeInfo()
// nome: Paula, email paula@email.com
/*
Dentro de cada objeto, criamos um método que chama a função externa imprimeNomeEmail(). Essa função é executada no contexto de cada um dos objetos e o this faz com que ela utilize os valores de propriedades desses objetos.
O this representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é: "execute a função aqui, utilizando este contexto".
No caso de atributos das funções construtoras ou dos construtores de classe, o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto.
*/
function Pardal(nome, email) {
    this.nome = nome
    this.email = email
    this.imprimeNomeEmail = function() {
        console.log(`nome: ${this.nome}, email ${this.email}`)
    }
}
/*
Quando criamos objetos com base nesta função construtora, os atributos que a função receber como parâmetro (nome, email) serão definidos no contexto de cada um deles
*/
const pessoa3 = new Pardal("Sandra", "sandra@email.com")
const pessoa4 = new Pardal("Tercia", "tercia@email.com")

pessoa3.imprimeNomeEmail()
// nome: Sandra, email sandra@email.com
pessoa4.imprimeNomeEmail()
// nome: Tercia, email tercia@email.com

// O JavaScript tem três métodos para manipular os valores de this:
/*
call()
Esse método permite que uma função seja chamada com parâmetros e valor de this específicos:
*/
function imprimeNomeEmail(tipoCliente) {
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
}

const cliente1 = {
    nome: "Carlos",
    email: "carlos@email.com"
}

const cliente2 = {
    nome: "Augusto",
    email: "augusto@email.com"
}
/*
Criamos uma funcão imprimeNomeEmail que recebe como parâmetro um dado que chamamos de tipoCliente. Esta função imprime no terminal um string com tipoCliente mais duas informações que estão associadas a algum objeto (ainda não informado) com this.
*/
// Executando a função call():
imprimeNomeEmail.call(cliente1, "cliente especial")
// cliente especial - nome: Carlos, email: carlos@email.com
imprimeNomeEmail.call(cliente2, "cliente estudante")
// cliente estudante - nome: Augusto, email: augusto@email.com
/*
Como a função está sendo chamada como objeto do método call(), podemos especificar que o contexto de this em cada chamada se refere a um objeto diferente (cliente1 e cliente2), sem a necessidade de adicionar a função em cada um dos objetos.
O primeiro parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo segundo parâmetro em diante, são passados os argumentos que a função deve receber. No caso acima, há somente um parâmetro, a string tipoCliente.
*/
/*
apply()
O método apply() funciona de forma muito semelhante ao call(), porém recebe os argumentos em um array ao invés de separados:
*/
function imprimeNomeEmail(tipoFregues, agencia) {
    console.log(`
    ${tipoFregues} da agência ${agencia}: - nome: ${this.nome}, email: ${this.email}
    `)
}
const fregues1 = {
    nome: "Domingos",
    email: "domingos@email.com"
}

const fregues2 = {
    nome: "Sebastião",
    email: "sebastiao@email.com"
}
/*
Chamando imprimeNomeEmail como o método apply() e passando um array de dados como segundo parâmetro, lembrando que o primeiro parâmetro de apply() se refere ao contexto de this, igual ao método call():
*/
const clienteSortudo = ["cliente especial", "Óbidos"]
const clienteEsperto = ["cliente estudante", "São João da Boa Vista"]

imprimeNomeEmail.apply(fregues1, clienteSortudo)
// cliente especial da agência Óbidos: - nome: Domingos, email: domingos@email.com
imprimeNomeEmail.apply(fregues2, clienteEsperto)
//cliente estudante da agência São João da Boa Vista: - nome: Sebastião, email: sebastiao@email.com
/*
Utiliza-se o método apply() caso tenha uma array de dados e o call() para passar valores individuais como parâmetro. Lembre-se que o array deve seguir a ordem correta dos parâmetros informado na função.
*/
/*
bind()
O método bind() "prende" ou "liga" uma função ao contexto de um objeto:
*/
const personagem = {
    nome: "Princesa Helena",
    apresentar: function() {
        return `a personagem é ${this.nome}`
    }
}
/*
O objeto acima contém uma propriedade nome e um método apresentar que retorna um string com nome; this.nome liga a propriedade nome ao contexto do objeto em que a função está definida, ou seja, "este objeto"
Executando essa função a partir de outro contexto:
*/
const personagemGenerico = personagem.apresentar
console.log(personagemGenerico()) // a personagem é undefined
/*
Quando atribuímos apresentar() à variável personagemGenerico estamos retirando a função apresentar() do contexto do objeto na qual foi criada, e por isso this não está mais acessível; a função perdeu a refêrencia original e não consegue mais localizar onde está this.
Resolvemos este problema com bin():
*/
const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido()) // a personagem é Princesa Helena
/*
Acima, utilizamos o método bind() para "ligar" a função que atribuímos a personagemGenerico ao objeto personagem. Assim, sempre que está função for executada a partir da variável personagemDefinido, a função original vai usar o objeto personagem como contexto de execução. Dessa forma, this sempre se refere ao objeto personagem e é capaz de acessar suas propriedades.
Estes três métodos têm variedade enorme de usos no dia a dia da programação com JavaScript.
*/