function diaDaSemana(valor) {
    switch(valor) {
        case 1:
            return "é domingo, é fim de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "é dia útil"
        case 7:
            return "É sábado, é fim de semana"
        default:
            return "dia inválido"
    }
}

console.log(diaDaSemana(15))
console.log(diaDaSemana(7))
console.log(diaDaSemana(1))
console.log(diaDaSemana(5))
console.log(diaDaSemana(3))
