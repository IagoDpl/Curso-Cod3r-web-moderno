function anoBissexto(ano) {
    if (ano <= 0) {
        return false
    }else if (ano % 400 == 0) {
        return true
    }else if (ano % 100 == 0) {
        return false
    }else if (ano % 4 == 0) {
        return true 
    }else         
        return false
}
    

console.log(anoBissexto(2000))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(50))
console.log(anoBissexto(40))