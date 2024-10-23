let gasto = [
    {type: "machine", value: 5000},
    {type: "machine", value: 650},
    {type: "duck", value: 10},
    {type: "furniture", value: 1200},
    {type: "machine", value: 77}
    ]

console.log(gasto.filter((g) =>g.type === "machine") 
.reduce((g,acum)=>acum.value + g,0));