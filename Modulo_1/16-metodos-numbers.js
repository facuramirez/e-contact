//* ALGUNOS MÉTODOS DE LOS NUMBERS

let numero1 = 32.564254;
let numero2 = 45.243846543;

//* Método "toFixed": Recibe como argumento la cantidad de números
//* decimales que quiero dejar. Redondea hacia abajo o hacia arriba
//* dependiendo del número que se encuentre en la posición siguiente al
//* parámetro indicado.

//* Ejemplo1: si el tercer decimal se encuentra entre 1 y 4 simplemente corta
//* desde la parte decimal dejando solamente 2 decimales.
//* Si el tercer decimal se encuentra entre 5 y 9 lo redondea hacia arriba.
//* Observar los siguientes ejemplos

//* Ejemplo1: lo deja en 32.56
console.log(numero1.toFixed(2));

//* Ejemplo2: lo deja en 45.244
console.log(numero2.toFixed(3));
