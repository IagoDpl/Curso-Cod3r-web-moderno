function montanteJurosSimples(capitalInicial1, taxaDeJuros1, tempoDeAplicacao1) {
    return capitalInicial1 + (capitalInicial1 * taxaDeJuros1 * tempoDeAplicacao1)
}

function montanteJurosCompostos(capitalInicial2, taxaDeJuros2, tempoDeAplicacao2) {
    return capitalInicial2 * (1 + taxaDeJuros2) ** tempoDeAplicacao2
}

console.log(montanteJurosSimples(1000, 10/100, 10))
console.log(montanteJurosCompostos(1000, 10/100, 10))
