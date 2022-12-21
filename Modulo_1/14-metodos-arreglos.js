//* MAS MÉTODOS DE LOS ARREGLOS
let materias = [
  "matematicas",
  "programación",
  "lengua",
  "física",
  "ciencias sociales",
  "educacion fisica",
  "lengua",
  "química",
];

//* Método "includes": retorna TRUE si encuentra el valor dentro del arreglo
//* Si no lo encuentra, retorna FALSE

const resultado1 = materias.includes("matematicas");
const resultado2 = materias.includes("asd");

//* Sacando por consola ambas variables podemos comprobar que en el primer
//* caso nos devuelve TRUE y en el segundo caso nos devuelve FALSE

//* ==================================================================================

//* Método "indexOf": retorna la posición del elemento que le pasamos como argumento
const indice = materias.indexOf("lengua");
//* Nos asigna un 2 a "indice" porque encuentra que el string "lengua" se encuentra
//* en esa posición en el arreglo. Si no encuentra el elemento a buscar, retorna -1
//* Si hay varias coincidencias, retorna la posición mas baja.

//* Método "lastIndexOf": igual que el "indexOf" pero retorna la posición mas alta
//* en el caso de producirse varias coincidencias en la búsqueda.
const ultimoIndice = materias.lastIndexOf("lengua");



