// Defasio - Cliente genérico
// Gerar uma função que permita a criação de novos clientes a partir de um modelo.
function ClienteBanco(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const cliente = new ClienteBanco("Bonifacio", "123456789012", "boni@email.com", 246)

console.log(cliente)
/*
ClienteBanco {
  nome: 'Bonifacio',
  cpf: '123456789012',
  email: 'boni@email.com',
  saldo: 246,
  depositar: [Function (anonymous)]
}
*/

// Desafio - Cliente poupança
/*
Aproveitar o cliente bancoue já existe e criar a partir dele um novo tipo de cliente para contas poupança.
*/
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    ClienteBanco.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const contaPoupanca = new ClientePoupanca("Helena", "098765432111", "helena@email.com", 100, 230)

console.log(contaPoupanca)
/*
}
ClientePoupanca {
  nome: 'Helena',
  cpf: '098765432111',
  email: 'helena@email.com',
  saldo: 100,
  depositar: [Function (anonymous)],
  saldoPoup: 230
}
*/
ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor
}

contaPoupanca.depositarPoup(60)

console.log(contaPoupanca.saldoPoup)
// 290

/*
Quando um objeto JavaScript é criado ele tem propriedades particulares (por exemplo: nome, cpf, ou email) e também outras propriedades herdadas do prótotipo.
Além do nome e do valor, cada propriedade tem também três atributos:
==> Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
==> Enumerable: Define se apropriedade é retornada, por exemplo, em um loop for...in ou utlizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;
==> Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento têm estes três atributos como true. Já a maior parte das propriedades herdadas do protótipo têm estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.
O JavaScript utiliza o termo own property (propreidade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf, email) e que não são herdadas do protótipo.
Podemos verificar os atributos de cada propriedade utilizando alguns métodos nativos do JavaScript:
*/
const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
        {
            "id": 50,
            "titulo": "Primeiros passos com NodeJS",
            "categoria": "programação",
            "versoes": ["ebook", "impresso"]
        }
    ]
}
/*
Usando o método Object.getOwnPropertyDescriptor() para descrever os atributos da propriedade editora, teremos:
*/
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))
/*
{
  value: 'Casa do Código',
  writable: true,
  enumerable: true,
  configurable: true
}
*/
/*
A propriedade editora foi criada e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável, ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries()
Métodos que começam com getOwnProperty... funcionam apenas em propriedades próprias do objeto.
Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo;
Objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora;
Objetos criados com Object.creat() recebem como prototype o primeiro parâmetro da função, que pode ser null
*/