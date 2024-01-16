const numeros = [5,10,6,9,73,70,82,54,3];
const mapear = numeros
  .map(el => el % 2)
  // .filter(el => el ===0)
  .forEach(el => console.log(el));