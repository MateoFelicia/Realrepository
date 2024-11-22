let A = 105;
let B = 36;
let C = 18;

if (A < B && A < C){
    console.log(A);
    if (B < C){
        console.log(B);
        console.log(C);
    } else {
        console.log(C);
        console.log(B);
    }
} 

if (B < A && B < C){
    console.log(B);
    if (A < C){
        console.log(A);
        console.log(C);
    } else {
        console.log(C);
        console.log(A);
    }
} 

if (C < A && C < B){
    console.log(C);
    if (A < B){
        console.log(A);
        console.log(B);
    } else {
        console.log(B);
        console.log(A);
    }
} 
