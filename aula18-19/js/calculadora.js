import somar from "./operacoes/somar.js";
import subtrair from "./operacoes/subtrair.js";
import multiplicar from "./operacoes/multiplicar.js";
import dividir from "./operacoes/dividir.js";

export default function calcular() {

    let n1 = Number(prompt("Primeiro numero"));
    let n2 = Number(prompt("Segundo numero"));
    let op = prompt("Operador :(+, -, *, /)")

    switch (op) {
        case "+":
            return somar(n1, n2);
            break;
        case "-":
            return subtrair(n1, n2);
            break;
        case "*":
            return multiplicar(n1, n2);
        case "/":
            return dividir(n1, n2);
            break;
        default:
            return "Opção invalida"
    }
}

// somar
somar: () => {
    return somar();
}
// // subtrair
subtrair: () => {
    return subtrair();
}
// // multiplicar
multiplicar: () => {
    return multiplicar();
}
// // dividir
dividir: () => {
    return dividir();
}