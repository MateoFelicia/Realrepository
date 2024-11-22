function primeFactors(i){
    for (let f = 2; f < i; f++){
        while (i % f == 0){
            console.log("i es: " + i);
            factors.push(f);
            i = (i / f);
        }
    }
    return factors;
}

let factors = [];
let n = 100;

console.log(primeFactors(n));