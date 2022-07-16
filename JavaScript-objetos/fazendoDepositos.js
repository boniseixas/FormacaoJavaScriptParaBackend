// Desafio - Fazendo depósitos
/*
Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer operações
*/
const cliente = {
    nome: "Helena",
    idade: 48,
    cpf: "12345678901",
    email: "helena@email.com",
    fones: ["19123456789", "19987654321"],
    dependentes: [
        {
            nome: "Sara Silva",
            parentesco: "filha",
            dataNascimento: "20/03/2011",
        },
        {
            nome: "Samia Maria",
            parentesco: "filha",
            dataNascimento: "04/01/2014"
        }
    ],
    saldo: 333.28,
    depositar: function (valor) {
        this.saldo += valor
    },

    sacar: function (valor) {
        this.saldo -= valor
    },
}
// funções dentro de um objeto, permite que seja executadas ações nesse objeto.

console.log(cliente.saldo);
cliente.depositar(53.48);
console.log(cliente.saldo);
cliente.sacar(40)
console.log(cliente.saldo);

// Desafio - Puxando relatório
// Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível de forma automatizada para fornecer a outros departamentos do banco.
let relatorio = "";
for(let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        // dessa forma o JavaScript entende que existe quebra de linha
        relatorio += `
        ${info} ===> ${cliente[info]}
        `
    }
}
console.log(relatorio);

// Desafio - Oferta de seguro
/*
Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro.
*/
function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
oferecerSeguro(cliente);
console.log(Object.values(cliente));
console.log(Object.entries(cliente));