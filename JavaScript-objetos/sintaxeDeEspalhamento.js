// Desafio - Lista de dependentes
/*
Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.
*/
const clientes = [
    {
        nome: "Bonifacio",
        cpf: "12345678900",
        dependentes: [{
            nome: "Barbara",
            parentesco: "filha",
            dataNascimento: "22/11/2010"
        },
        {
            nome: "Tais",
            parentesco: "filha",
            dataNascimento: "22/11/2010"
        }],
    },
    {
        nome: "Helena",
        cpf: "9876543210",
        dependentes: [{
            nome: "Taysa",
            parentesco: "filha",
            dataNascimento: "13/12/2014"
        }],
    }
]

// operador de espalhamento ==> ...
const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.log(listaDependentes);
console.table(listaDependentes);

// spread operator => copia as propriedades de objetos para outros, "espalhando" os conteúdos.
const fichaGuerreiro = {
    nome: "Aragon",
    classe: "guerreiro"
}

const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
// juntar esse dois objetos em apenas um. Em um primeiro teste, vamos criar um novo objeto literal com {} e passar para este objeto as variáveis de cada personagem:
const guerreiro = {fichaGuerreiro, equipoGuerreiro};
console.log(guerreiro);
// O resultado no console mostra que os objetos ainda estão separados, o nome de cada variável agora é uma chave e o valor da chave é cada um dos objetos.
/*
{
  fichaGuerreiro: { nome: 'Aragon', classe: 'guerreiro' },
  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
}
*/
// Usando o spread operator (adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula):
const espalhamento = {...fichaGuerreiro, ...equipoGuerreiro};
console.log(espalhamento);
// O console mostra agora o resultado esperado
/*
{
  nome: 'Aragon',
  classe: 'guerreiro',
  espada: 'Andúril',
  capa: 'capa élfica +2'
}
*/
/* Importante! Caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontre novos valores com o mesmo nome de chave:
*/
const mago = {
    nome: "Gandalf",
    classe: "mago"
}

const selva = {
    nome: "Aragon",
    classe: "guerreiro"
}

const ranger = {
    nome: "Legolas",
    classe: "ranger"
}
// Os três objetos acima têm as mesmas propriedades. Espalhando os dados em um único objeto com o spread operator:

const personagens = {...mago, ...selva, ...ranger};
console.log(personagens);
// output: { nome: 'Legolas', classe: 'ranger' }
/*
O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi somente o último objeto declarado dentro do objeto personagens.
Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser usado com cuidado em caso de loops ou funções recursivas.
*/