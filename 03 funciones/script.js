/* 
function nombre(argumentos con comas){
    instrucciones
}
*/
function crearSaludo(nombre = "usuario") {
  console.log(`Hola ${nombre}`);
}
crearSaludo();
crearSaludo("Julian");

// Hositing de funciones: las puedo llamar antes de declararlas
console.log(sumar(3, 4));
function sumar(a, b) {
  return a + b;
}

// FUNCIONES ASIGNADAS A CONSTANTES
// Las tengo que declarar antes de llamarlas

// Asignando funcion a constante
const sumarConst = function sumarConConstante(a, b) {
  return a + b;
};
console.log(sumarConst(3, 4));

// Asignando funcion anonima a constante
const sumarConstAnonima = function (a, b) {
  return a + b;
};
console.log(sumarConstAnonima(3, 4));

// Funcion flecha
const sumarFlecha = (a, b) => {
  return a + b;
};
console.log(sumarFlecha(3, 4));

// Funcion flecha en linea, el return es implicito
const sumarFlechaEnLina = (a, b) => a + b;
console.log(sumarFlechaEnLina(3, 4));