class Cliente {
    constructor(nome, cpf, email, saldo) {
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }

    //função depositar
    depositar(valor) {
        this.saldo += valor
    }

    // função exibir saldo
    exibirSaldo() {
        console.log(this.saldo)
    }
}

const bonifacio = new Cliente("Bonifacio", "12345678901", "boni@email.com", 129)

bonifacio.exibirSaldo() // 129

console.log(bonifacio)
/*
Cliente {
  nome: 'Bonifacio',
  cpf: '12345678901',
  email: 'boni@email.com',
  saldo: 129
}
*/

// Desafio - Cliente poupança
/*
Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança.
*/
class ClientePoupanca extends Cliente {
    constructor(nome, cpf, email, saldo, saldoPoupanca) {
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor
    }
}

const helena = new ClientePoupanca("Helena", "12345678901", "helena@email.com", 100, 249)

console.log(helena)
/*
ClientePoupanca {
  nome: 'Helena',
  cpf: '12345678901',
  email: 'helena@email.com',
  saldo: 100,
  saldoPoupanca: 249
}
*/

helena.depositar(50)
helena.depositarPoupanca(50)

console.log(helena)
/*
ClientePoupanca {
  nome: 'Helena',
  cpf: '12345678901',
  email: 'helena@email.com',
  saldo: 150,
  saldoPoupanca: 299
}
*/