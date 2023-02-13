// Algoritmo que muestra los números pares entre el 0 y el 100.
function numerosPares() {
    let resultado = [];
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
        resultado.push(i);
      }
    }
    return resultado;
}

// Imprimir los elementos del array “y” que no se encuentran en el array “x”
//Arrays
const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

//Código en una línea
let noComunes = y.filter(elem => !x.includes(elem));

console.log(noComunes);