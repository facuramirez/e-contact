//* SINTAXIS CORTA PARA ASIGNAR VALORES A UN OBJETO
const nombre = "Juana";
const altura = 1.68;
const esProfesora = false;

// Redudante
const alumna1 = {
  nombre: nombre,
  altura: altura,
  esProfesora: esProfesora,
};

// Aplicando nuevas caracteristicas de ES6+
// La siguiente sintaxis arroja exactamente el mismo resultado
const alumna2 = {
  nombre,
  altura,
  esProfesora,
};

//* =======================================================================================================

//* EJEMPLO UTILIZANDO REST OPERATOR (...)
//* ((utilizado en la linea 31))

const pelicula = {
  titulo: "El Señor de los Anillos",
  lanzamiento: 2001,
  genero: ["Aventuras", "Fantasía", "Ciencia Ficción"],
  puntaje: 95,
};

const { titulo, ...resto } = pelicula;

console.log(titulo);
console.log(resto);

//* Lo siguiente es lo que sale por consola

// El Señor de los Anillos
// {
//   lanzamiento: 2001,
//   genero: [ 'Aventuras', 'Fantasía', 'Ciencia Ficción' ],
//   puntaje: 95
// }

//* NOTAR que en la variable resto (que se puede llamar de cualquier forma)
//* se asigno un objeto con las restantes propiedades que NO fueron desestructuradas

//* =======================================================================================================
//* EJEMPLO UTILIZANDO SPREAD OPERATOR (...)
const numerosBajos = [1, 4, 5, 8];
const numerosAltos = [23, 31, 35, 68];
const todosLosNumeros = [...numerosBajos, 100, ...numerosAltos, 200];

console.log(todosLosNumeros);

//* Lo siguiente es lo que sale por consola
// [1, 4, 5, 8, 100, 23, 31, 35, 68, 200]


