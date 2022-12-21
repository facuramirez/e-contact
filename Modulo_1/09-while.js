//* CONSIGNA: Crear un programa en el cual se obtengan
//* números aleatorios y mostrarlos por consola hasta
//* obtener un número mayor a 70
//* NOTA: utilizar la clase Math.random

let random;

while (true) {
  random = Math.random() * 100;

  if (random >= 90) {
    console.log(`Número obtenido: ${random}`)
    console.log(`Algoritmo finalizado`)
    break;
  }

  console.log(`El numero obtenido fue: ${random}`);
}

