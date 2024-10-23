let lista = [
    {type: "mate", value: 5000},
    {type: "mate", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "mate", value: 77}
]

console.log(lista.filter((c) =>c.type === "mate")
.reduce((c,acum)=>acum.value + c,0));