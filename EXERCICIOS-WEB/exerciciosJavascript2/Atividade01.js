// Minha resposta

/* function cumprimentar(pessoa) {
    return `olá ${pessoa}!`
}
const pessoa = "Leonardo"
console.log(cumprimentar(pessoa)) */

const nome = "Leonardo"
function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

console.log(cumprimentar(nome))

