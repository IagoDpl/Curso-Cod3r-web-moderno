/* Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console*/ 

vetorInteiro = [1, 5, 10, 15]
vetorString = ["a", "b", "c", "d"]
vetorDouble = [1.2, 1.4, 1.6, 1.8]

function concatenar (...args) {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
        
    }
    return resultado;
}
console.log(vetorInteiro, vetorDouble)
console.log(vetorDouble, vetorString)