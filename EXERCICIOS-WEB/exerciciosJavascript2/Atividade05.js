/* function maiorOuIgual(primeiro, segundo) {
   if (typeof primeiro != typeof segundo)  
        return false   
        return primeiro >= segundo
} */

function maiorOuIgual(primeiro, segundo) {
    if (primeiro >= segundo) {
      return true;
    } else {
      return false;
    }
}

console.log(maiorOuIgual(5, 5))

