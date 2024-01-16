const carros = [
    {
        id: 1,
        nome: "gol",
        marca: "VW",
        ano: 2010,
        preco: 15000,
        itensNoPortaMalas: ["pendrive", "step"]
    }
]

const json = JSON.stringify(carros);
console.log(json);