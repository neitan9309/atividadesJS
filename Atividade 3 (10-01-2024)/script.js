/*
Parte 3 dos exercícios de JavaScript do canal 'Codewithbubb'
https://www.youtube.com/watch?v=0_sbUwVU32k
*/

/* 
Escreva um programa que conte quantos algarismos
divisiveis por 2 tem numa array.
*/

const divisibilidadePor2 = (arr) =>
    arr.filter(num => num % 2 === 0).length; /*Usamos um 'filter', que busca
    os números divisiveis por 2 da array, aliado de um 'length' para que se
    armazene a quantidade desses números.*/

console.log(divisibilidadePor2([1,2,3,4,5,6]));
console.log(divisibilidadePor2([2,2,2,2,2,2]));
console.log(divisibilidadePor2([3,5,7,9,10,100]));


/* 
Escreva um programa que conte quantos algarismos
divisiveis por 2 tem numa array com a quantidade
de números x.
*/

const criarArray = (num) => {//Parâmetro 'num' para o tamanho da array.
    const retornarArray = []; //Variável do tipo array.
    for (let i = 1; i <= num; i += 1) { /*Loop 'for' que tem como intuito a contagem.
    Este loop é cortado no parâmetro 'num' definido acima.*/
        retornarArray.push(i);/*chamada da variável 'retornarArray' aliado de um 'push'
        que vai armazenando a contagem iniciada com o loop 'for'*/
    } 
    return retornarArray;
};

console.log(divisibilidadePor2(criarArray(6)));
console.log(divisibilidadePor2(criarArray(9)));


/* 
Escreva um programa que cheque se um array tem
seus algarismos organizados de forma ascendente
*/

const checarAscendencia = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i+1] < arr[i]) return false;
    }
    return true;
}

console.log(checarAscendencia([1,2,3,4,5,6]));
console.log(checarAscendencia([1,2,5,3,4,6]));


/* 
Escreva um programa que retorne o maior número
divisivel por 2 de um array.
*/

const maiorNumeroDivisivelPor2 = (arr) =>
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(maiorNumeroDivisivelPor2([1,2,3,4,5,6]));
console.log(maiorNumeroDivisivelPor2([1,2,33,4,5,6]));
console.log(maiorNumeroDivisivelPor2([1,2,3,44,55,6]));


/* 
Escreva um programa que altere o primeiro algarismo
de um array, reponha este com '$' (o array deve conter
ao menos um dígito).
*/

const alterarPrimeiroAlgarismo = (str) => {
    if (!/\d/.test(str)) {
    return 'A string não contém números.';
    }

    return str.replace(/[0-9]/, '$');
};

console.log(alterarPrimeiroAlgarismo('Abcd'));
console.log(alterarPrimeiroAlgarismo('Abcd1Abcd'));
console.log(alterarPrimeiroAlgarismo('A123Abcde'));