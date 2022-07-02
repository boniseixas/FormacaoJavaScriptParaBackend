/*
Artigo: Strings com JavaScript: o que são e como manipulá-las
Autor: André Bessa | Alura
Este artigo faz parte da Formação JavaScript para back-end
*/
/*
Em programação, trabalhamos com dados dos mais variados tipos, independentemente da linguagem. Como os booleanos (verdadeiro ou falso), números (inteiros, ponto flutuante) e alguns tipos mais complexos, como estruturas e objetos. Um dos tipos mais utilizados em programação são as strings, sequências (ou cadeias) de caracteres que usamos para, entre outras coisas, manipular textos.

No exemplo a seguir, temos uma cadeia de caracteres representada como um array:
*/
const fruta = "indispensavel";
// ["i", "n", "d", "i", "s", "p", "e", "n", "s", "a", "v", "e", "l"]

/*
Imagine que estamos desenvolvendo o código de uma aplicação em JavaScript. A validação dos campos de login e senha foi solicitada e é preciso verificar se o tamanho da senha de cada usuário atende à regra de ter um tamanho mínimo de 8 caracteres e impedir que haja espaços no início ou no fim do login cadastrado.

Desse modo, precisaremos fazer o tratamento de strings.

Como podemos fazer isso? Quais opções o JavaScript pode oferecer para esses casos? No texto a seguir, vamos ver essas possibilidades de trabalhar com strings na linguagem.
*/
// O que é uma String?
/*
Por definição, strings são sequências de caracteres alfanuméricos (letras, números e/ou símbolos) amplamente usadas em programação. Em Javascript, uma string sempre estará entre aspas.
*/
const frase = "Mergulhando em JavaScript";

// ou

const texto = 'Mergulhando em JavaScript';

// ou ainda

console.log('Mergulhando em JavaScript');

/*
Podemos colocar nossas strings entre aspas duplas ou simples. Para o JavaScript, não há diferença, já que ele considera as duas formas de declaração válidas.
*/
/*
Em alguns momentos, a string poderá ser um texto que contém aspas. Nesses casos, é preciso combinar a utilização das aspas simples com aspas duplas e vice-versa, porque um texto como: “Ela disse: “Adeus””, não funciona corretamente.

Vamos ao exemplo:
*/
console.log('Ela disse: "Adeus!"');

// ou
console.log("Ela disse: 'Adeus!' ");

/*
É importante ressaltar que, depois que a sequência de caracteres for definida, a string é imutável, ou seja, não poderá ter seu valor alterado. Então, como manipular a string?

Sempre que manipulamos uma string, é criada uma nova instância dela por baixo dos panos, o que significa que será gerado um novo espaço na memória com uma cópia do valor da string. Por isso, temos que utilizar uma variável para armazená-la.
*/

// Objeto String
/*
A linguagem JavaScript traz ainda como recurso um objeto global String que nos permite criar ou converter um tipo em uma string, veja o exemplo abaixo:
*/
const numero = 256;
const convertidoEmString = new String(numero);

console.log(convertidoEmString); // [String: '256']

/*
A saída após exibirmos a variável convertidoEmString usando o método console.log() é [String: '256']. Na construção do objeto usando new String(parâmetro), o parâmetro pode ser qualquer elemento do nosso código que queiramos transformar em string.

Também é possível converter outros tipos primitivos (por exemplo, números e booleanos) em strings com o método toString():
*/

const num = 500;

console.log(num.toString());

// Usando Strings
/*
É possível interpolar, concatenar, checar posições de caracteres ou ainda substituir partes de strings. Vamos ver algumas dessas utilizações com o JavaScript?
*/

// Concatenando strings
/*
Quando falamos em concatenar strings, quer dizer que vamos juntar duas ou mais strings e formar uma nova. Observe o exemplo abaixo:
*/

let nome = "Bonifacio";
let sobreNome = "Seixas";
let nomeCompleto = "Meu nome completo é: " + nome + " " + sobreNome;
console.log(nomeCompleto) // Meu nome completo é: Bonifacio Seixas

/*
Para concatenar as strings nome e sobreNome com a string de texto que é o valor de nomeCompleto, usamos o operador de adição (+). Podemos usar também +=, como no exemplo abaixo:
*/

let nome2 = "Helena";
let saudacoes = "Seja bem-vinda ";
console.log(saudacoes += nome2); // Seja bem-vinda Helena

// Interpolando strings (template strings)
/*
A interpolação de strings é um recurso bem interessante, presente em diversas linguagens. No JavaScript, é uma alternativa mais prática para manipular string sem a necessidade de fazer concatenação, porque para textos maiores, concatenar pode ser um pouco trabalhoso.

Usando as chamadas template strings ou templates literais, a pessoa desenvolvedora consegue ter uma flexibilidade maior no trabalho com strings, além de facilitar a escrita e leitura do código.

Veja abaixo a utilização de template strings:
*/
let nome3 = "Bonifacio";
let saudacoes2 = `Seja bem-vindo ${nome3}`;
console.log(saudacoes2);

// Veja como exemplo o poema “E agora, José?” de Carlos Drummond de Andrade:
let nome4 = "Boni"
let poema = `
   E agora, ${nome4}?
   A festa acabou,
   a luz apagou,
   o povo sumiu,
   a noite esfriou,
   e agora, ${nome4}?
   e agora, você?
   você que é sem nome,
   que zomba dos outros,
   você que faz versos,
   que ama, protesta?
   e agora, ${nome4}?
`
/*
Observe que, para a utilização da template string, ela deve estar entre acentos graves (`) e, para fazer a interpolação, o valor ou variável deve estar dentro da estrutura ${valor}. Vale ressaltar que usando *template strings* temos a opção de utilizar a quebra de linha normalmente, sem caracteres de escape para isso, como\n`.
*/

// Métodos para strings
/*
É importante ressaltar que o JavaScript diferencia strings como tipos primitivos (com aspas duplas ou simples) de objetos Strings (quando usamos a palavra reservada new). Mas, por baixo dos panos toda string, mesmo as que criamos com a chamada “forma literal”, por exemplo const texto = “Alura”, acaba convertida para um objeto do tipo String. Por isso, temos acesso a uma série de métodos e propriedades deste objeto.
*/

// Propriedades e métodos úteis e bem práticos para trabalhar com strings em nossas aplicações:
.length
/*
A propriedade length serve para nos informar o tamanho de uma string.

Caso a aplicação tenha como uma das regras para criação de senhas (que em geral são alfanuméricas) o tamanho de 8 caracteres, usar length será uma boa opção, pois ajudará a contar a quantidade de caracteres da string.
*/
const palavra = "futebol";
console.log(palavra.length); // 7

/*
Veja que length é exatamente a mesma propriedade que acessamos quando queremos descobrir o comprimento (ou seja, a quantidade de elementos) em um array.
*/

charAt();
/*
Com o método charAt() conseguimos acessar um caractere de uma string. Lembre-se que, por baixo dos panos, strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string.
*/

console.log(palavra.charAt(4)); // b

/*
Após a execução do método charAt(), ela retornará o caractere b, que é o valor que consta na posição 4 da string - lembrando que arrays em JavaScript começam na posição 0 (zero).
*/

indexOf()
// a função indexOf(), retorna a posição de um caractere dentro da string
const novaPalavra = "agenda";
console.log(novaPalavra.indexOf("e")); //2
console.log(novaPalavra.indexOf("a")); //0

/*
O resultado é a posição 2. Porém, na utilização do indexOf(), caso o caractere que se busca na string seja encontrado em mais de uma posição, será retornada somente a primeira ocorrência.
*/
// O resultado da execução do indexOf() é um valor numérico.

toUpperCase()
toLowerCase()
/*
São duas funções bastante utilizadas quando estamos trabalhando com string e precisamos deixar o texto todo em letras minúsculas (lowercase) ou todo em maiúsculas (uppercase). Vamos ver o código abaixo:
*/
const texto2 = "indisPENsavel";
console.log(texto2.toUpperCase()); // INDISPENSAVEL
console.log(texto2.toLowerCase()); // indispensavel

// O resultado da execução dos métodos toUpperCase() e toLowerCase() é uma nova string.

substring()
/*
Outra função muito interessante é a substring(), que permite que façamos a extração de parte de uma string, conforme o código abaixo:
*/

let frases = "Mergulhando em tecnologia";
console.log(frases.substring(0, 11)); // Mergulhando
/*
A função recebe como parâmetro o início e o fim da nova string a ser retirada da string principal. Na execução do código acima, temos como resultado a palavra Mergulhando.
*/
// O resultado da execução do método substring() é uma nova string.

slice()
/*
Podemos utilizar também o método slice(), que usamos com arrays. Ele é similar ao substring() e retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim:
*/
let frase2 = "Mergulhando em JavaScript";
console.log(frase2.slice(0, 9)); // Mergulhan

// O resultado da execução do método slice() é uma nova string.

replace()
/*
Com a função replace() temos a possibilidade de substituir parte de uma string por outra. Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar. Olhe o exemplo abaixo, em que precisamos substituir a string nomeusuario no texto padrão de comunicacao.
*/
let nome5 = "Bonifacio";
let comunicacao = "Olá, sr. nomeusuario, informamos que a partir da presente data o senhor tem 30% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusuario", nome));
// Olá, sr. Bonifacio, informamos que a partir da presente data o senhor tem 30% de desconto em nossa loja.
/*
Na execução deste exemplo, a string nomeusuario será substituída pelo conteúdo da variável nome. Como resultado da execução do método replace() teremos uma nova string.
*/
concat()
/*
O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+). Ele concatena duas strings, adicionando a nova string ao fim da anterior.
*/
let novaString = "Programe nas principais linguagens e plataforma. Explore linguagens como ";
console.log(novaString.concat("JavaScript,").concat(" Python").concat(" e C#."));
// Programe nas principais linguagens e plataforma. Explore linguagens como JavaScript, Python e C#.

/*
Para a execução do método replace() teremos como resultado uma nova string.
*/

split()
/*
O método split() é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro.
*/
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);
// [ 'JavaScript', 'Java', 'C#', 'PHP', 'Python', 'Go', 'C++' ]

/*
Quando trabalhamos com o split(), devemos nos atentar, pois a execução gerará como resultado um array de strings com os elementos que foram separados com base no separador desejado. Portanto a execução do código resulta em um array de strings
*/

trim()
/*
O trim() remove os espaços em branco no início ou fim de uma string. Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços, faremos;
*/
let login = "     boni@emailteste.com     ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //boni@emailteste.com

/*
A variável loginSemEspaco conterá uma nova string, sem os espaços em branco no início ou fim que podem ter sido digitados. Então, quando executado o método trim(), o resultado é uma nova string.

No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight()
*/

// Conclusão
/*
Neste artigo, vimos o que são strings e como podemos manipulá-las usando métodos do Javascript.

Lembre-se que trabalhar com texto é uma atividade que todas as pessoas que desenvolvem farão em seus códigos em algum momento. Por isso é tão importante conhecer as strings e suas particularidades.
*/