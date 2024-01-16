const qtdItens = [10, 25, 34, 79, 5, 50];
const filtrar = qtdItens

  .filter(el => el >= 30)
  .map(el => el + 1)
  .forEach(el => console.log(el));