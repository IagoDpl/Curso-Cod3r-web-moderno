/* ) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros */
function mediaAritmetica(mediaNum) {
    let soma = 0
    for (let i = 0; i < mediaNum.length; i++) {
        soma += vetor[i]
        
    }    
    return soma/vetor.length
    
}

vetor = [10, 50, 5, 20, 60, 80] 
console.log(mediaAritmetica(vetor))