function venderCarro(automovel) {
    switch(automovel) {
        case "hatch":
            console.log("Compra efetuada com sucesso")
            break;
        case "sedan":
        case "motocicletas":
        case "caminhonetes":
            console.log("Tem certeza que não prefere teste modelo?")
            break;
        default:
            console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

venderCarro("sedan")
venderCarro("motocicletas")
venderCarro("hatch")
venderCarro("caminhonetes")
venderCarro("ônibus")