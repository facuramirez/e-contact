// === ARREGLOS ===
// Definición (se usan corchetes [])
const arreglo1 = ["Futbol", 45, true];

// Desestructuración
const [a, , c] = arreglo1;


// =====================================================================
// === OBJETOS ===
// Definición(se usan llaves {})
const objeto1 = { nombre: "Facundo", altura: 1.81, materia: "Programacion" };

// Desestructuración
const { nombre: nom, altura } = objeto1;


// IMPORTANTE !!!
// Luego de realizar la desestructuracion ya puedo utilizar las variables
// extraídas como cualquier variable definida normalmente.

// En el caso de desestructurar las propiedades de un objeto
// y renombrar una de esas propiedades, la variable quedará definida
// con el nombre que le proporcionemos.

