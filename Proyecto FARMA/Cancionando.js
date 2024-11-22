//Dado un arreglo de objetos que representan personas, cada uno con
//propiedades nombre y edad. Utiliza map para crear un nuevo arreglo que
//contenga solo los nombres en mayúsculas de las personas.

const personas = [ { nombre: 'Juan', edad: 30 }, { nombre: 'María',
edad: 25 }, { nombre: 'Pedro', edad: 35 } ]

console.log(personas.map(g => g.nombre));

