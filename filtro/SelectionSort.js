let aux = 0;
let swaps = 0;

function SelectionSort(lista){
    for (let i=0; i < lista.length - 1 ; i++){
        for (let j=i+1; j < lista.length; j++){
            if (lista[j] < lista[i]){
                swap(i,j);
            }
        }
    }
    return lista;
}


function swap(i,j){
    aux = lista[i];        
    lista [i] = lista [j]; 
    lista [j] = aux;   
    console.log("Cambié " + lista[i] + " por " + lista[j])
    console.log(lista)
    swaps++
}
let lista = [12,7,5,2,0]
console.log("Mirá, estoy ordenado: " + SelectionSort(lista) + ". hice esta cantidad de cambios: " + swaps)
