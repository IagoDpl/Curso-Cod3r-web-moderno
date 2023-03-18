/* function valores(primeiro, segundo) {
    if (primeiro > segundo) {
        return !true
    } else {
        return "Booleano ou número esperados, mas o parâmetro é do tipo..."
    }
}


console.log(valores(5, 2))
*/ 

function inverso(valor) {
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
}

console.log(inverso(5))
