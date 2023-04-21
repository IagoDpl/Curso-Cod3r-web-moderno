function lerNumero(num) {
    switch(num) {
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'número fora do intervalo'
    }

}
console.log(lerNumero(0))
console.log(lerNumero(1))
console.log(lerNumero(2))
console.log(lerNumero(3))
console.log(lerNumero(4))
console.log(lerNumero(5))
console.log(lerNumero(6))
console.log(lerNumero(7))
console.log(lerNumero(8))
console.log(lerNumero(9))
console.log(lerNumero(10))
console.log(lerNumero(11))
