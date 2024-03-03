// Declarar objeto
const persona = {
  nombre: "Homero",
  apellido: "Simpson",
};

console.log(persona);

// Acceder a propiedades
console.log(persona.nombre);
console.log(persona["nombre"]);

// Asignando valores a propiedades
persona.nombre = "Homero J";
persona["edad"] = 47;
console.log(persona);

// Borrando propiedades
delete persona.edad;

// Recorriendo propieades del objeto
for (propiedad in persona) {
  console.log(`${propiedad} ${persona[propiedad]}`);
}
console.log(Object.keys(persona));
console.log(Object.values(persona));
console.log(Object.entries(persona));

// Destructuracion
const { nombre, apellido } = persona;
console.log(nombre, apellido);

// Creacion de objeto a partir de variables
const homero = { nombre, apellido };
console.log(homero);

// Spread operator
const datosViejos = {
  nombre: "Homero",
  apellido: "Simpson",
};
const datosNuevos = {
  nombre: "Homero J",
  ciudad: "Springfield",
};
const datos = { ...datosViejos, ...datosNuevos, edad: 47 };
console.log(datos);