// operador ... rest (juntar)/spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionaro = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ... funcionaro}
console.log(clone)

// usar spreado com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)