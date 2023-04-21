function cardapio(produto, quantidade) {
    switch(produto) {
        case 100:
            console.log("Sua compra deu o total de " + quantidade * 3)
            break
        case 200:
            console.log("Sua compra deu o total de " + quantidade * 4)
            break
        case 300:
            console.log("Sua compra deu o total de " + quantidade * 5.50)
            break
        case 400:
            console.log("Sua compra deu o total de " + quantidade * 7,50)
            break
        case 500:
            console.log("Sua compra deu o total de " + quantidade * 3,50)
            break
        case 600:
            console.log("Sua compra deu o total de " + quantidade * 2,80)
            break
        default:
            "Erro, produto não existente"
    }
}

cardapio(100, 3)
cardapio(200, 3)
cardapio(300, 3)
cardapio(400, 3)
cardapio(500, 3)
cardapio(600, 3)
cardapio(700, 3)
cardapio(800, 3)
cardapio(200, 3)
cardapio(400, 3)
