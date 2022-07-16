// Desafio - Lista de telefone
// Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro
const cliente = {
    nome: "Helena",
    idade: 48,
    cpf: "12345678900",
    email: "helena@gmail.com",
    fones: ["1912345678", "1998765432"]
}

cliente.fones.forEach(telefone => console.log(telefone));

// Desafio - Compondo um objeto
// Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco
const clienteBanco = {
    noem: "Miguel",
    idade: 38,
    cpf: "09876543210",
    email: "miguel@email.com",
    fones: ["1912345678", "1998765432"]
}

clienteBanco.dependentes = [{
    nome: "Tata",
    parentesco: "filha",
    dataNascimento: "13/11/2007"
}]

console.log(clienteBanco);

// modificando dependente:
clienteBanco.dependentes.nome = "Tata Barbara";

console.log(clienteBanco);

// Desafio - Lista de dependentes
// Verificar a melhor forma de agregar informação de um novo dependente ao objeto
// primeiro passo é transformar o obejto dependentes em array, para isso, voltar ao objeto dependentes e inserir os colchetes [], após isso, podemos inserir uma nova lista usando um método de array:
clienteBanco.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNascimento: "04/01/2014"
})

console.log(clienteBanco);

// imprimindo a mais nova:
// como o obejeto dependentes está dentro de um array, podemos utilizar dos métodos de array para filtrar a dependente mais nova:
const filhaMaisNova = clienteBanco.dependentes.filter(dependenteMaisNova => dependenteMaisNova.dataNascimento === "04/01/2014");

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);