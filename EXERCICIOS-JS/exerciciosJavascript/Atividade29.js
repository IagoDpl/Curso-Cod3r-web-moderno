/* Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function intervaloVetores(intervalo) {
    let qtdNumDez = 0
    let qtdNumNaoDez = 0
    for (let i = 0; i < intervalo.length; i++) {
        if (intervalo [i] %10 == 0) {
            qtdNumDez++
        } else {
            qtdNumNaoDez++
        }

        
    }
    console.log(`${qtdNumDez} números estão dentro do intervalo e ${qtdNumNaoDez} estão fora do intervalo`)
}

numeros = [10, 20, 30, 35, 40, 58, 60, 65, 68, 64, 67, 80, 90, 100, 110, 115]
intervaloVetores(numeros)

/* function observarIntervalo (vetor) {
    qtdNumerosNoIntervalo = 0
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosNoIntervalo++
        }
    }
    return `${qtdNumerosNoIntervalo} números dentro do intervalo.`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

console.log(observarIntervalo(vetor))*/