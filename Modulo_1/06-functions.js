//* ========================== UNA FORMA DE DEFINIR FUNCIONES ==========================
function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

const sumatoria = sumar(3, 5);
console.log(`Sumatoria es iguala: ${sumatoria}`);

const mensaje = function (frase) {
  return `La frase tipeada es: ${frase}`;
};

console.log(mensaje("HOLA "));

function saludar(nombre) {
  console.log(`Hola ${nombre}, ¿cómo estás?`);
}

saludar("Florencia");

//* ========================== OTRA FORMA DE DEFINIR FUNCIONES ==========================
const mostrarMensaje = function (mensaje) {
  return mensaje;
};

console.log(mostrarMensaje("Mensaje de prueba"));

//* =====================================================================================
const alumno = {
  nombre: "Laura",
  altura: 1.75,
  casada: true,
  deportista: true,
  deportes: ["hockey", "running"],
};

//* Definimos una función estableciendo un "objeto" como único parámetro

const datosAlumno = function (alumno) {
  return `El nombre del alumno es ${alumno.nombre} y su altura es ${alumno.altura}`;
};

//* Definimos una función estableciendo que vamos a desestructurar 2 (dos) propiedades
//* del objeto que debe recibir esa función al ser llamada

const datosAlumno2 = function ({ nombre, altura }) {
  return `El nombre del alumno es ${nombre} y su altura es ${altura}`;
};

const resultado1 = datosAlumno(alumno);
const resultado2 = datosAlumno2(alumno);

console.log(resultado1);
console.log(resultado2);
