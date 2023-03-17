function tratarErroLancar(erro) {
    // throw new error ('...)
    // throw 10
    // throw true
    // throw message
}
    
function imprimirNomeGritado(obj) {
    try  {
        console.log(obj.name.toUpperCase()) + ('!!!')
}   catch (e) {
    tratarErroLancar(e)
}        finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)