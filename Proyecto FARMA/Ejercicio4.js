let n = 0;

for (let i = 0; i < 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        n = i*i*i;
        console.log(n);
    }
}