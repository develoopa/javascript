// DECLARAR ARRAY
let primos = [2, 3, 5];
console.log(primos);

// AGREGAR Y QUITAR ELEMENTOS DEL ARRAY
// push: agregar un elemento al final del array
console.log(primos.push(7)); // parametro: elemento a agregar, tiene como return la nueva longitud
console.log(primos);
// pop: quitar un elemento al final del array
console.log(primos.pop()); // tiene como return el elemento eliminado
console.log(primos);
// shift: quitar un elemento al principio del array
console.log(primos.shift()); // parametro: elemento a agregar, tiene como return el elemento eliminado
console.log(primos);
// unshift: agregar un elemento al principio del array
console.log(primos.unshift(2)); // tiene como return la nueva longitud
console.log(primos);

// RECORRER EL ARRAY
// for
for (let i = 0; i < primos.length; i++) {
  console.log(`for: indice ${i}, valor ${primos[i]}`);
}
// for ... of
// no modifican el array, modifican objetos
for (let primo of primos) {
  console.log(`for ... of: ${primo}`);
}
// forEach(funcion)
// no modifican el array, modifican objetos
primos.forEach((primo) => console.log(`forEach ${primo * 2}`));

// CHECKEAR SI EXISTEN ELEMENTOS EN MI ARRAY
// includes: devuelve true si existe algun elemento que cumpla la igualdad es estricta
// le paso como parametro el elemento a comparar (coindide valor y tipo de dato)
console.log(primos.includes(3));
console.log(primos.includes("3"));
console.log(primos.includes(7));
// some: devuelve true si existe al menos un elemento que al ejecutar la funcion me devuelva true
// le paso como parametro la funcion para ejecutar
const usuarios = [
  { id: 1, nombre: "Julian", puntos: 75 },
  { id: 2, nombre: "Julian", puntos: 83 },
  { id: 3, nombre: "Mariana", puntos: 79 },
];
console.log(usuarios.some((user) => user.nombre === "Julian"));

// ENCONTRANDO ELEMENTOS
// find: devuelve el primer elemento para el que la funcion arroje return true
// le paso como parametro la funcion para ejecutar
console.log(usuarios.find((user) => user.nombre === "Julian"));

// FILTRAR ARRAY
// filter: devuelve un array con todos los elementos para los que la funcion arroje return true
// le paso como parametro la funcion para ejecutar
console.log(usuarios.filter((user) => user.nombre === "Julian"));
// no modifica el array original
console.log(usuarios);


// CREANDO NUEVO ARRAY
// map: devuelve un nuevo array, no altera los objetos originales
// le paso como parametro la funcion para ejecutar que modifica el array
console.log(
  usuarios.map((user) => {
    return { ...user, puntos: user.puntos + 5, categoria: "A" };
  })
);
// no modifica el array original ni los objetos a los que hace referencia
console.log(usuarios);

// CORTAR UN ARRAY
// slice: devuelve una porcion del array
// le paso como parametro el indice inicial (incluyente) y el indice final (excluyente)
const numeros = [
  0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
  180, 190, 200,
];
console.log(numeros.slice(0, 5));
// no modifica el array original
console.log(numeros);