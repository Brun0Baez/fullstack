const numeros = [5,10,6,9,73,70,82,54,3];

const pares = numeros
  .filter(el => el%2 === 0)
  .forEach(el => console.log(el));