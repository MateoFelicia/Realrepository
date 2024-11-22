let n = 0;

for (let i = 0; i < 100; i++){
    if (i % 2 == 0){
        n += i;
        console.log(n);
        if (n > 1000){
            break;
        }
    }
}