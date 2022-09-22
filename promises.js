/*
Existem algumas formas de se trabalhar com processamento assíncrono (ou seja, Promises) em JavaScript: utilizando o método .then(), as palavras-chave async e await ou o objeto Promise e seus métodos. Aqui, vamos focar no uso de .then(), async/await e no uso do método Promise.all.
*/
function getUser(userId) {
   const userData = fetch(`https://api.com/api/user/${userId}`)
      .then(response => response.json())
      .then(data => console.log(data.name))
}

getUser(1);

/*
Esmiuçando o código acima: a função getUser() recebe um id de usuário como parâmetro, para que seja passado para o endpoint REST fictício. A função fetch() recebe como parâmetro o endpoint e retorna uma Promise.
E como funcionam as Promises?
Promises têm um método chamado .then(), que recebe uma função callback e retorna um "objeto-promessa". Não é um retorno dos dados, é a promessa do retorno destes dados.
No exemplo acima: ao iniciarmos uma cadeia de promessas - no caso, para fazer uma requisição HTTP - enquanto a resposta está pendente ela retorna um Promise object. O objeto, por sua vez, define uma instância do método .then(). Ao invés de passar o retorno da função callback diretamente para a função inicial, ela é passada para .then(). Quando o resultado da requisição HTTP chega, o corpo da requisição é convertido para JSON e este valor convertido é passado para o próximo método .then().
A cadeia de funções fetch().then().then() não significa que há múltiplas funções callbacks sendo usadas com o mesmo objeto de resposta, e sim que cada instância de .then() retorna, por sua vez, um new Promise(). Toda a cadeia é lida de forma síncrona na primeira execução, e em seguida executada de forma assíncrona.
*/