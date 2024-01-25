/* 
boleanos toman dos valores: verdadero o falso
true    verdadero
false   falso
*/
let userLoggeado = true;
let esAdmin = false;
let esSuperUser = true;

console.log(typeof userLoggeado, typeof esAdmin, typeof esSuperUser);

// negacion
console.log(!userLoggeado);

/*
estructura del if 
no es necesario el else if pero puedo poner tantos else if como quiera
no es necesario poner el else aunque (este el else if)
if(condicion){
  ...
}else if(otraCondicion){
  ...
}else{
  ...
}
*/

if (userLoggeado) {
  // anido ifs
  if (esAdmin) {
    console.log("user loggeado es admin");
  } else if (esSuperUser) {
    console.log("es super user");
  } else {
    console.log("es user comun");
  }
} else {
  console.log("user no loggeado");
}

/*
expresiones de comparación (1/2): igualdades
=== igualdad estricta       coincide el tipo de dato y el valor
==  igualdad                coincide el valor
!== desigualdad estricta    no coincide el tipo de dato o no coincide el valor (basta con que una no se cumpla)
!=  desigualdad             no coincide el valor
*/

let numero = "10"; // numero 10 en formato texto

if (numero === 10) {
  console.log("el valor y el tipo de dato coincide");
} else if (numero == 10) {
  console.log("el valor coincide");
} else {
  console.log("el valor no coincide");
}

/*
expresiones de comparación (2/2): mayor / menor
<   menor que
>   mayor que
<=  menor o igual que
>=  mayor o igual que

Logico AND
Ambos tienen que ser verdaderos para que sea verdadero
Sino es falso
true && true    true
true && false   false
false && true   false
false && false  false

Logico OR
Con que uno sea verdadero, ambos son verdaderos
true || true    true
true || false   true
false || true   true
false || false  false
*/

let otroNumero = 20;
if (otroNumero > 10 && otroNumero < 30) {
  console.log("otroNumero es mayor que 10 y menor que 30");
}

if (otroNumero > 30 || otroNumero <= 20) {
  console.log("otroNumero es mayor que 30 o es menor o igual que 20");
}
