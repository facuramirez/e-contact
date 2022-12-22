//* OTRAS FORMAS DE MOSTRAR DATOS POR CONSOLA (arreglos y objetos)

//* Objeto
const alumno = {
  nombre: "Julian",
  altura: 1.74,
  edad: 28,
  esDeportista: true,
};

//* Arreglo
const frutas = ["manzana", "pera", "kiwi", "uvas"];

//* Objeto
const pelicula = {
  nombre: "El callejón de las almas perdidas",
  lanzamiento: 2021,
  puntaje: 95,
  genero: ["acción", "suspenso"],
};

console.table(alumno);
console.table(frutas);
console.table(pelicula);
