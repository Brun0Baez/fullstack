const carros = [
    {
        id: 1,
        marca: "fiat",
        nome:"marea",
        cor: "azul",
        velocidade: 200
    },
    {
        id: 2,
        marca: "ford",
        nome: "corcel",
        cor : "vermelho",
        velocidade:150
    }, 
    {
        id:3,
        marca:"chevrolet",
        nome:"chevet",
        cor: "branco",
        velocidade: 160
    },
    {
        id:4,
        marca:"toyota",
        nome:"corolla",
        cor:"preto",
        velocidade: 210,
    },
    {
        id:5,
        marca:"mitsubshi",
        nome: "lancer",
        cor:"vermelho",
        velocidade: 220
    }
];
const carrosV = carros
    .filter(carro => carro.velocidade>=200)
    .forEach(carro => console.log(carro.nome))
