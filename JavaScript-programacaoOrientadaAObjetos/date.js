/*
Date é um objeto utilizado para trabalhar as datas e o tempo em JavaScript. No dia a dia de desenvolvimento é muito comum precisarmos utilizar a informação da data e hora para realizar alguma tarefa ou, especialmente, lidar com dados. No entanto, em JavaScript, essa mesma informação pode assumir diferentes tipos.
*/
let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)

console.log(typeof dataEHora)

let dataHora = new Date() // utilizando o construtor do objeto Date
console.log(dataHora)

console.log(typeof dataHora)

/*
Quando utilizamos um construtor, também temos acesso a todos os métodos do objeto Date. Podemos ver melhor essa diferença nos exemplos a seguir:
*/
let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getDate()
console.log(data1)
// utilizamos o método getDate(), que já existe em qualquer objeto criado a partir de Date(), para obter o dia do mês.

let dataFuncao = Date()
let data2 = dataFuncao.getDate() // TypeError: dataFuncao.getDate is not a function
// vemos que uma data gerada através da chamada da função Date() diretamente não pode acessar os demais métodos do objeto Date, ao passo que ao gerarmos uma nova instância desse objeto é possível acessar todos os métodos definidos dentro deste objeto, como por exemplo getDate().

// Exemplos de outros métodos disponíveis no objeto Date: .getMillisseconds(), .getSeconds(), .getMinutes(), .getHours(), .getDay(), .getMonth(), .getFullYear()