let lista = [10,18,191,13,248,9284758723332];
let listaPar;

function CopyPairs(lista) { 
    listaPar = (lista.filter((n) =>n%2===0));
    console.log(listaPar)
}
CopyPairs(lista);


