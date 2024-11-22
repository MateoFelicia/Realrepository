//Dado un array de objetos que representan estudiantes [{nombre: "Ana", edad: 18},
//{nombre: "Luis", edad: 21}, {nombre: "Carlos", edad: 19}], usa .find() 
//para obtener al primer estudiante mayor de 20 años.

console.log([{nombre: "Ana", edad: 18},{nombre: "Luis", edad: 21},
{nombre: "Carlos", edad: 19}].find(a => a.edad > 20));
