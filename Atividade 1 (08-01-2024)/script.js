/*
Parte 1 dos exercícios de JavaScript do canal 'Codewithbubb'
https://youtu.be/N65RvNkZFGE?si=7q-2sgxKC_U8w_Bv
*/

/* 
Escreva um código que cheque dois números
e retorne 'true' caso um dos números ou
a soma desses dois números seja 100.
*/

const verificarNumero = (a, b) => a === 100 || b === 100 || (a + b) === 100; /*Constante que define os parâmetros
'a, b' e verifica as condições mencionadas.*/

//Checagens
console.log(verificarNumero(100, 0));
console.log(verificarNumero(0, 100));

console.log(verificarNumero(20, 80));
console.log(verificarNumero(50, 50));

console.log(verificarNumero(10, 0));
console.log(verificarNumero(0, 10));


/*
Escreva um código que retorne a extensão de um arquivo.
Em suma retorne o '.html' de index.html, por exemplo.
*/

const qualExtensao = (str) => str.slice
    (str.lastIndexOf('.')); /*Constante que recebe um parâmetro 'str', em seguida chama o método 'slice' (cria uma
    array com a string) método este que recebe o resultado do trecho: 'str.lastIndexOf(.)' (retorna o último '.' e
    o restante da frase pós '.').
    */

console.log(qualExtensao('style.css'));
console.log(qualExtensao('webpack.extensions.html')); /*Teste que demonstra a utilidade do lastIndexOf, que define
a última incidência do '.' como foco do script.*/


/*
Escreva um código que reescreva uma string. Cada
caractere deve ser substituída pela letra que vem
em seguida no alfabeto.
*/

const substituirLetra = (str) =>
    str.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join(''); /*Constante que percorre a
    array criada com 'split' aplicando o método charCodeAt(0), que obtém o código da caractere atual e incrementa
    esse valor em 1. Em seguida o trecho 'String.fromCharCode' converte os códigos referentes as caracteres em
    caracteres propriamente ditas. Por fim temos o 'join' que converte nossa array de volta em string.*/

console.log(substituirLetra('abcd'));


/*
Escreva um código que forneça a data atual.
Formatação: dd/mm/aaaa
*/

const formatarData = (date = new Date()) => {
    const dias = date.getDate();
    const meses = date.getMonth() + 1;
    const anos = date.getFullYear();
    return `${dias}/${meses}/${anos}`;
} /*Constante que busca a data atual com 'getDate' (dia), 'getMonth' (mês), 'getFullYear' (ano) e armazena
nas suas respectivas constantes, que retornam formatadas pelo trecho `${dias}/${meses}/${anos}`.
*/

console.log(formatarData());


/*
Escreva um código que adicione 'Novas!' antes
da string fornecida.
Se esta string já começar com este trecho retorne-a
sem alterações.
*/

const addNew = (str) =>
    str.indexOf('Novas!') === 0 ? str : `Novas! ${str}`;/*Constante que checa a presença e o index do trecho
    'Novas!' na string fornecida. Se este trecho existir e estiver presente no começo da string, o código retorna 
    a string (str.indexOf('Novas!') === 0 ? str), caso contrário, o adicionamos (: `Novas! ${str}`).*/

console.log(addNew('Ofertas.'));
console.log(addNew('Novas! Ofertas.'))