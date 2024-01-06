// log en la consola
console.log("Hola mundo!");

// comentario en linea

/* 
Comentarios en bloque!
(en varias lineas)
*/

// DECLARACION DE VARIABLES
let numero; // declaro la variable numero
numero = 3; // le asigno el valor de 3
console.log(typeof numero); // typeof nos da el tipo de dato (number)

const otroNumero = 2; // declaracion y asignacion en misma linea
console.log(typeof otroNumero); // typeof nos da el tipo de dato (number)

let otroNumeroMas = "8";
console.log(typeof otroNumeroMas); // typeof nos da el tipo de dato (string)

let suma = numero + otroNumero;
console.log(suma); // 5

suma = numero + otroNumeroMas; // como otroNumeroMas es texto convierte numero a texto
console.log(suma); // "38"

suma = numero + parseInt(otroNumeroMas);
console.log(suma); // 11

numero++; // numero = numero + 1;
numero--; // numero = numero - 1;
numero += 2; // numero = numero + 2;
numero -= 2; // numero = numero - 2;
numero *= 2; // numero = numero * 2;
numero /= 2; // numero = numero / 2;

let texto = "hola";
console.log(typeof texto); // typeof nos da el tipo de dato (string)
let otroTexto = ", como estas?";
console.log(typeof otroTexto); // typeof nos da el tipo de dato (string)
console.log(texto + otroTexto); // "hola, como estas?"