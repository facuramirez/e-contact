//* ================== OBJETOS ==================
const alumno = {
  nombre: "Juan",
  edad: 25,
  pais: "Chile",
  casado: false,
  saludar: function () {
    return "Bienvenido! ¿Cómo estás?";
  },
  idiomas: ["español", "inglés", "francés"],
  direccion: {
    calle: "Av. Lopez Torres",
    nro: 469,
    descripcion: "Casa de ladrillos con portón negro",
  },
};

//* Desestructuración
const { nombre, saludar } = alumno;

//* Utilización de la función y posterior asignacion a la constante "resultado"
const resultado = saludar();

//* Mostrar por consola
console.log(nombre);
console.log(resultado);



