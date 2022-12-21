//* Crear un programa en el cual se obtengan números
//* alteatorios y sumarlos hasta que dicha sumatoria
//* sea menor a 300
//* NOTA: Usar Math.random para obtener los números

let sumatoria = 0;
let random;
let max = 300;

do {
  random = Math.random() * 100;

  if (sumatoria + random > max) {
    console.log('Algoritmo finalizado!')
    break;
  }
  
  sumatoria += random;
  console.log(`Valor acumulado: ${sumatoria}`);
} while (sumatoria < max);

console.log(`La sumatoria fue de ${sumatoria}`);



