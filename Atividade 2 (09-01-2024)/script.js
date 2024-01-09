/*
Parte 2 dos exercícios de JavaScript do canal 'Codewithbubb'
https://youtu.be/U0Ce27lA7R4?si=eLkkf-3qMXDS46Ps
*/

/* 
Escreva um código que selecione de uma string
tanto as 3 caracteres iniciais quanto as 3 últimas
e as junte. A string deve ter o tamanho de 3 
caracteres ou mais, caso contrário retorne-a
sem alterações.
*/

const manipularString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3); /*Função que pergunta: A string fornecida possui
    menos de 3 caracteres? Se sim, a mesma é retornada sem alterações (str.length < 3 ? str), caso contrário
    juntamos as 3 primeiras caracteres às 3 últimas (: str.slice(0, 3) + str.slice(-3) [Valores negativos são
    caracteres da string contadas de trás pra frente]).
    */

console.log(manipularString('abc'));
console.log(manipularString('abcdef'));
console.log(manipularString('abc123abc321'));
console.log(manipularString('ab'));


/* 
Escreva um código que extraia a primeira metade
de uma string, independente de seu tamanho.
*/

const primeiraMetade = (str) => str.slice(0, str.length / 2);/*Função que seleciona, com slice, do começo da
string (str.slice(0,) até a metade desta (str.length / 2)). Caso o número de caracteres da string seja ímpar
o programa arredonda o valor para baixo. Exemplo: 'templos', retornará 'tem'.
*/


console.log(primeiraMetade('temp'));
console.log(primeiraMetade('templo'));
console.log(primeiraMetade('templos'));


/* 
Escreva um código que concatene duas strings, exceto
suas primeiras caracteres.
*/

const concatenar = (str1, str2) =>
    str1.slice(1) + str2.slice(1); /*Esta função armazena as duas strings, apartir do index 1 de cada uma
    destas, nos parâmetros 'str1' e 'str2' (o index 0 é a primeira caractere) e depois os soma.
    */

console.log(concatenar('abc', 'def'));
console.log(concatenar('Desenvolvedor', 'Junior'));


/* 
Escreva um código que, dado dois valores, responda
qual destes é mais próximo de 100.
*/

const proximoDe100 = (a, b) => (100 - a) < (100 - b) ? a : b; /*Esta função compara os dois números usando
uma conta de subtração, onde o resultado menor (independente do sinal positivo ou negativo) vai retornar
como variável.
*/

console.log(proximoDe100(99, 1));
console.log(proximoDe100(49, 51));
console.log(proximoDe100(50, 50));
console.log(proximoDe100(150, 49));


/* 
Escreva um código que cheque a presença de 2 a 4
ocorrências de uma caractere específica.
*/

const contarChars = (str, char) =>
    str.split('').filter(ch => ch === char).length; /*Esta função usa do parâmetro 'filter' para filtrar uma
    determinada caractere 'ch' (associado com '===' ao parâmetro da função 'char') e resgatar a informação de
    quantas destas ocorrem na string com 'length'.
    */

const contemDe2a4 = (str, char) =>
    contarChars(str, char) >= 2 && contarChars(str, char) <= 4; /*Já esta pergunta: a quantidade de caracteres
    'char' da string 'str' é maior ou igual a 2 e menor ou igual a 4? O resultado vem em booleano: 'true', 'false'.
    */

console.log(contemDe2a4('ooh!', 'o'));
console.log(contemDe2a4('oh!', 'o'));
console.log(contemDe2a4('oooh!', 'o'));
console.log(contemDe2a4('ooooh!', 'o'));
console.log(contemDe2a4('oooooh!', 'o'));