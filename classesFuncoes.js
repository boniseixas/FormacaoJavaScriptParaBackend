// objeto literal
const Livro = {
    nome: "React Native",
    editora: "Casa do código",
    paginas: 185,
    anunciar: function () {
        console.log("A Alura indica o livro " + this.nome + "!")
    }
}

Livro.anunciar() // A Alura indica o livro React Native!

const Livros = function (nome, editora, paginas) {
    gNome = nome,
        gEditora = editora,
        gPaginas = paginas

    this.getNome = function () {
        return gNome
    }
    this.getEditora = function () {
        return gEditora
    }
    this.getPaginas = function () {
        return gPaginas
    }
}

const GraphQL = new Livros("GraphQL", "Casa do código", 149)
console.log(GraphQL.getNome())
console.log(GraphQL.getEditora())
console.log(GraphQL.getPaginas())
/*
GraphQL
Casa do código
149
*/

// Uso de classe:
class Escrito {
    constructor(nome, editora, paginas) {
        this.nome = nome
        this.editora = editora
        this.paginas = paginas
    }
    anunciarTitulo() {
        console.log(`Título: ${this.nome}`)
    }
    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas}`)
    }
}

const NodeJS = new Escrito("Primeiros passos com NodeJS", "Casa do Código", 195)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()
// Título: Primeiros passos com NodeJS
// Primeiros passos com NodeJS é um livro da editora Casa do Código e tem 195

//Herança
class LivroColecao extends Escrito {
    constructor(nome, nomeColecao) {
        super(nome)
        this.nomeColecao = nomeColecao
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`)
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar")
LogicaDeProgramacao.descreverColecao()
// O livro Lógica de Programação faz parte da coleção Comece a Programar