// === OBJETOS ===

// === ARREGLOS ===
// Definición (se usan corchetes [])
const deportes = ["Futbol", "Rugby", "Hockey", "Golf"];
const datos = ["Casa", 45, true, 20, undefined];
const arreglo1 = ["Juan", 30, false];
const arreglo2 = ["Pepito", 45, true];

// A diferencia de los casos anteriores, acá la referencia en memoria que
// tiene "arreglo1" se lo asigno a "arreglo3"
const arreglo3 = arreglo1;

// Muestro por consola el largo del arreglo "deportes" con la propiedad ".length"
console.log(deportes.length);

// Modifico el valor de la primera posición de "arreglo1"
arreglo1[0] = "Marcelo";

// Modifico el valor de la tercera posición de "arreglo3"
arreglo3[2] = "TERCERA POSICIÓN";

// ======================================================================================
// === OBJETOS LITERALES ===
// Definición (se usan corchetes {})
const persona = {
  nombre: "Laura",
  edad: 20,
  altura: 1.71,
};

const objetoPrueba = {
  tamano: "grande",
  color: "rojo",
};

// Asigno LA REFERENCIA EN MEMORIA que tiene "persona" a "persona2"
const persona2 = persona;

// Creo una copia de LOS VALORES que tiene "persona" y lo asigno a "persona3"
const persona3 = { ...persona };

// Modifico la propiedad "nombre" del objeto "persona"
persona.nombre = "PEPE !!!";

// ACLARACIÓN: recordemos que "persona2" también tiene la misma referencia que "persona"
// por lo tanto la propiedad "nombre" de "persona2" también se verá MODIFICADA.
// La variable "persona3" NO se verá afectada porque tiene otra referencia, es decir,
// apunta a otro espacio en memoria.

persona3.nombre = "MARCOSSSSSS";
// ACLARACIÓN: en este caso solo modificamos la propiedad nombre de "persona3", ya que
// tiene una referencia diferente a "persona" y "persona2"

console.log(
  "=========================================================================="
);

// Cambio el valor de las propiedades de "objetoPrueba"
objetoPrueba.color = "verde";
objetoPrueba.altura = 200;

// IMPORTANTE !!!
// Nótese que tanto los ARREGLOS como los OBJETOS LITERALES fueron definidos con
// la palabra reservada "const" PERO aún así pudimos modificar sus valores,
// tanto los valores de cada posición de cada arreglo como el valor de las propiedades
// de cada objeto.
// En todos esos casos, lo que NO SE MODIFICÓ fue la referencia en memoria, es decir,
// una vez definido el arreglo u objeto se le asignó un espacio en memoria el cual
// nunca fue modificado. El hecho de modificar sus valores no modificó esa referencia, por
// lo tanto nunca nos tiró un Error.
// Nos daría error en el caso de querer asignar a esas variables un nuevo valor, sea un nuevo
// arreglo u objeto, o asignarle algún dato primitivo, como un string o un boolean por ejemplo.
