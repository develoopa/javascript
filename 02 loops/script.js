/*
for(variable con valor inicial; condicion; instruccion ejecutada al final del bloque){
    ...
}
*/

for (let i = 1; i < 5; i++) {
  console.log("i vale " + i);
}

for (let i = 1; i < 5; i++) {
  console.log("i vale " + i);
  if (i === 3) break;
}

/*
while(condicion){
    ...
    el while checkea y luego el bloque se ejecuta
    si la condicion inicialmente es falsa el bloque nunca ejecuta
}

el break detiene la ejecucion del while
*/

let continuarWhile = false;
while (continuarWhile) {
  console.log("este log no lo vas a leer");
  break;
}

/*
do{
    ...
    el bloque se ejecuta y luego checkea
    si la condicion inicialmente es falsa el bloque se ejecuta una vez
} while(condicion)

el break detiene la ejecucion del do

*/
let continuarDo = true;
let n = 1;
do {
  console.log("n vale " + n);
  n++;
  if (n === 5) continuarDo = false;
} while (continuarDo);
