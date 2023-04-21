/* Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */
function numNegativos(numeros) {
    let qtdNegativos = 0
        for (let i = 0; i < numeros.length; i++) {
            if (numeros [i] < 0) {
                qtdNegativos++
                
            }
        }
        return qtdNegativos            
}

numeros =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numNegativos(numeros))