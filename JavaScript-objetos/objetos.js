// a estrutura de um objeto é formado por um par de chave/valor
const cliente = {
    nome: "Helena",
    idade: 48,
    cpf: "12345678900",
    email: "boni@email.com"
}

// Acessando dados
// Desafio: Printar infos
// Acessar um objeto com informações de um cliente e exibir essa informação no console
const comprador = {
    nome: "Bonifacio",
    idade: 49,
    cpf: "098765431212",
    email: "boni@email.com"
}

console.log(comprador); // acessa o objeto todo
console.log(comprador.nome); // acessa apenas a chave/valor especificado
console.log(`Meu nome é ${comprador.nome} e tenho ${comprador.idade} anos`); // console com templete string
// acessando parte de uma string dentro do objeto
console.log(comprador.cpf.substring(0, 3));

// Desafio - acessando chaves
// Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela
const conta = {
    nome: "Ana Cristina",
    idade: 48,
    cpf: "12345678900",
    email: "ana@email.com"
}
// passando as chaves do objeto para um array:
const chaves = ["nome", "idade", "cpf", "email"];

// acessando o objeto pelo array:
console.log(conta[chaves[0]]); // dessa forma só podemos acessar um índice do array e consequentemente uma chave do objeto

// para acessar o objeto todo, uma forma é usar o forEach()
chaves.forEach(info => console.log(conta[info]));

// Desafio - Adicionando campos
// Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores:
const clienteBanco = {
    nome: "Juliana",
    idade: 37,
    cpf: "09876543211",
    email: "juliana@email.com"
}

console.log(clienteBanco);

// adicionando um par de chaves/valor ao objeto:
clienteBanco.fone = "98765432";

console.log(clienteBanco);

// alterando o valor de um objeto:
clienteBanco.fone = "123456789";

console.log(clienteBanco);

// deletando um conjunto de chave/valor:
const objPersonagem = {
    nome: "Grandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}
// removendo a propriedade aliado:
delete objPersonagem.aliado;

console.log(objPersonagem.aliado);
console.log(objPersonagem);

// também é possivel utilizar a notação de colchetes:
delete objPersonagem["status"];
console.log(objPersonagem.status);
console.log(objPersonagem);

// Importante! o delete remove o par chave/valor
/*
O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. Porém, é importante notar que ele NÃO retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
*/
const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];

console.log(delProp); //true
console.log(delPropInexistente); //true

// O operador delete não remove propriedade herdada de outro objeto, neste caso, retornará false.