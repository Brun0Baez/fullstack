import calcular from "./calculadora.js"
import realizarSaudacao from "./saudacao.js";

const myBot = {
    id: 1,
    nome: "Albert",
    type: "Geral",
    versao: "1.0.0",
    autor: "Bruno Baez",
    criarDados: "",
    updateDate: "",

    iniciarFuncoes: () => {
        let perguntar = Number(prompt("O que deseja fazer? (1 - saudar ou 2 - calculadora)"));

        switch (perguntar) {
            case 1:
                alert(myBot.saudacao());
                break;
            case 2:
                alert(myBot.calcular());
                break;
            default:
                alert("OPÇÃO INVALIDA");
        }
    },

    //Saudações
    saudacao: () => {
        return realizarSaudacao()
    },
    //Calculadora
    calcular: () => {
        return calcular()
    }

}
myBot.iniciarFuncoes();