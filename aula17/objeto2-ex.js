const produto = {
    id: 1,
    nome: "besser",
    preco: 99.90
}

produto.calcularPreco = () => {
    let total = 0;
    return total += produto.preco;
}

console.log(produto.calcularPreco());