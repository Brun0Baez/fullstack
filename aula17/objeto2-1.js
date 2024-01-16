const PC = {
    id: 1,
    SO: "windows 11",
    processador: "intel core i9",
    placaMae: "azus",
    placaDeVideo: "RTX 3090",

    enviarEmail(){
        return "enviado";
    }
    
};

// exibindo função na tela 
// console.log(PC.enviarEmail());

// exibindo cada um separadamente 
// for (const atributo in PC) {
//     console.log(atributo+": "+PC[atributo])
// }