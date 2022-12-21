//* ALGUNOS MÉTODOS DE LOS ARREGLOS
const deportes = ["futbol", "rugby", "golf"];

//* Asignamos la referencia en memoria de "deportes" a "deportes2"
const deportes2 = deportes;

//* Método PUSH: Agregar elementos a un arreglo
deportes.push("hockey");
deportes.push("volley");

console.log(deportes);
console.log(deportes2);

//* Lo siguiente sale por consola
// [ 'futbol', 'rugby', 'golf', 'hockey', 'volley' ]
// [ 'futbol', 'rugby', 'golf', 'hockey', 'volley' ]

//* IMPORTANTE: Observamos que agregamos elementos SOLO a "deportes"
//* pero NO a "deportes2". Eso significa que el método "push" muta el objeto.
//* SIGNIFICA que todos los arreglos que tengan LA MISMA REFERENCIA se van
//* a ver afectados.

//* SOLUCIÓN: Para solucionar este problema podemos usar "Sprear Operator"
//* tanto para ASIGNAR los valores en primera instancia, como así también,
//* para agregar valores a ese arreglo en el futuro sin utilizar el método "push".
//* Al usar "Spread Operator" asignamos LOS VALORES y NO LA REFERENCIA.


let deportes3 = [...deportes];
//* En la linea anterior asignamos LOS VALORES de "deportes" a "deportes3"
//* pero la variable "deportes3" ahora tiene una referencia en memoria diferente.

//* OTRO EJEMPLO: Asigno 2 (dos) deportes (strings) a "deportes3"
deportes3 = [...deportes3, "handball", "basket"];

//* De esta manera colocamos todos los valores que tenia "deportes3" y le agregamos
//* otros 2 (dos) valores mas. Un detalle es que el nuevo arreglo creado, que fue
//* asignado nuevamente a "deporte3", cuenta con una nueva referencia, es decir,
//* siempre que usemos "Spread Operator", asignamos una nueva referencia en memoria.

console.log(deportes3);

//* Lo siguiente sale por consola
// ["futbol", "rugby", "golf", "hockey", "volley", "handball", "basket"]
