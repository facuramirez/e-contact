//* MAS MÉTODOS DE LOS ARREGLOS
let materias = [
  "matematicas",
  "programación",
  "lengua",
  "física",
  "ciencias sociales",
  "educacion fisica",
];

//* Método POP: elimina el ultimo elemento del arreglo
materias.pop();
console.log(materias);
// [ 'matematicas', 'programación', 'lengua' ]

//* Método UNSHIFT: agrega un elemento al principio del arreglo
materias.unshift("ciencias naturales");
console.log(materias);
// ["ciencias naturales", "matematicas", "programación", "lengua"]

//* //* Método SHIFT: elimina el primer elemento del arreglo
materias.shift();
console.log(materias);
// ["matematicas", "programación", "lengua"]

//* IMPORTANTE !!!
//* Estos 3 (tres) métodos (pop, unshift y shift) al igual que "push"
//* mutan el objeto, por lo que es recomendable utilizar otros mecanismos
//* para evitar problemas.

//* EJEMPLOS

//* Otras forma de eliminar el ultimo elemento del arreglo
//* Con la siguiente forma colocamos dejamos como "undefined" la ultima posición del arreglo
//* El largo del arreglo "materias" sigue siendo el mismo en este caso
materias[materias.length - 1] = undefined;

//* Con el método "slice" podemos "cortar el arreglo" indicando las posiciones de inicio y final
//* que deseemos cortar. El primer parámetro (inicio) es INCLUSIVE y el segundo parámetro (final)
//* es EXCLUSIVE.
//* ¿QUÉ SIGNIFICA ESTO? Lo que le decimos al aplicar el método "slice" es lo siguiente:
//* "Cortame desde la posición CERO (inclusive) hasta la la posición XXX (sin incluir esa posicion)"
//* NOTA: el método "slice" no muta el objeto, es decir, no podemos aplicarlo sin asignarselo a
//* alguna variable. De lo contrario no se verán los cambios porque no modifica el arreglo al que se
//* lo aplico, sino que me RETORNA un nuevo arreglo con los nuevos valores.

//* Cortamos el arreglo desde la posición 0 hasta la posición 2 (porque la 3 no incluye en el resultado)
materias = materias.slice(0, 3);

//* Cortamos el arreglo desde el inicio hasta la última posición
materias = materias.slice(0, materias.length - 1);



