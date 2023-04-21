
function planoAumento(pTrabalho, Salario) {
    switch(pTrabalho) {
        case 'a':
            return Salario * 1.1
        case 'b': 
            return Salario * 1.15
        case 'c':
            return Salario * 1.2
        default:
            return "Erro, Plano inválido"
    }
   
}

console.log(planoAumento('a', 1000))
console.log(planoAumento('b', 1000))
console.log(planoAumento('c', 1000))
console.log(planoAumento('d', 1000))