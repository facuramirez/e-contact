//* ALGUNOS MÉTODOS DE LOS STRINGS
let nombre = "Francisco";
let pelicula = "El Señor de los Anillos es una excelente película";

//* Método "includes": Retorna TRUE o FALSE dependiendo de que
//* el valor pasado como argumento se encuentre dentro del string o no

console.log(nombre.includes("ss"));

const resultado = nombre.includes("ra");
console.log(resultado);

//* Método "length": Retorna el largo del string, es decir, la cantidad
//* de caracteres que tiene (incluyendo los espacios en el caso de ser una frase por ejemplo)
console.log(nombre.length);

//* Método "replace": Sirve para reemplazar caracteres o parte del string.
//* El primer argumento es el valor a reemplazar
//* El segundo argumento es el valor que deseo colocar en su lugar
//* IMPORTANTE: en el caso de existir mas de una coincidencia, este método
//* va a operar sobre la PRIMER COINCIDENCIA nada mas.

console.log(nombre.replace("a", "D"));
console.log(pelicula.replace("Señor", "Amo"));

//* Método "replaceAll": Igual que el anterior pero en este caso reemplazamos
//* todas las coincidencias que encuentre
console.log(pelicula.replaceAll("e", "E"));

//* Método "slice": Sirve para cortar strings. Para ello se debe indicar las posiciones.
//* El primer argumento es el inicio del recorte (inclusive)
//* El segundo argumento es el final del recorte (sin incluir esa posición)
console.log(nombre.slice(0, 3));

//* Método "split": Sirve para pasar el string a un arreglo estableciendo un
//* criterio con el argumento pasado.

//* Ejemplo1: Le paso como argumento un string que contiene un espacio, entonces
//* cada vez que haya un espacio en el string lo va a separar en diferentes
//* posiciones para luego colocar eso dentro de un arreglo. Al observar lo que sale
//* por consola se comprenderá mejor.

console.log(pelicula.split(" "));

//* Ejemplo2: Le paso un string vacío para separar todas las letras del string
//* y colocarlas en un arreglo
console.log(nombre.split(""));

//* Método "startsWith": Devuelve TRUE si el string que se le pasa como argumento
//* coincide con el inicio del string al cual le estamos aplicando el método,
//* sino devuelve FALSE.

console.log(nombre.startsWith("Fran"));

//* Método "toLowerCase": Convierte el string todo a minúscula
console.log(nombre.toLowerCase());

//* Método "toUpperCase": Convierte el string todo a mayúsucula
console.log(nombre.toUpperCase());

