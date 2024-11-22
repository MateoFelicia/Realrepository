//Implementar una función auxiliar IsDivisible que tome por
//parámetros dos números a y b respectivamente. Dicha función debe
//retornar un valor booleano que determine si a es divisible por b.
//Luego de implementar la función auxiliar (esta se puede
//implementar sin utilizar ES6) se debe emplear funcionalidades de
//ES6 para recibir como parámetro un arreglo de números enteros y
//que se filtren todos aquellos valores que sean divisibles por 5
//utilizando la función auxiliar solicitada al principio del
//enunciado y mostrar el resultado por la consola del sistema.

function IsDivisible (a , b) {
    if (a % b == 0){
        return a;
    }
}

let numeros = [95, 96, 17, 18, 19, 20, 21].filter(IsDivisible);
let div = 5;

console.log(numeros);

