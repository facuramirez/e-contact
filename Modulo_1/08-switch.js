//* CONSIGA: Un supermercado ofrece un descuento al cliente
//* segun el color de la pelota que saque al momento de pagar
//* ROJO = 0% descuento
//* AMARILLO = 40% descuento
//* AZUL = 75% descuento
//* BLANCA = 100% descuento

const pelota = "AMARILLO";
let valorCompra = 100;

let descuento;
let valorFinal;

switch (pelota) {
  case "ROJO":
    descuento = 0;
    break;
  case "AMARILLO":
    descuento = 40;
    break;
  case "AZUL":
    descuento = 75;
    break;
  case "BLANCA":
    descuento = 100;
    break;
  default:
    console.log("POR FAVOR, INDIQUE UNA PELOTA CORRECTA");
    break;
}

if (descuento !== undefined) {
  valorFinal = valorCompra - (valorCompra * descuento) / 100;

  console.log(`El descuento obtenido fue del ${descuento}%`);
  console.log(`El valor total de la compra fue de ${valorFinal} CLP`);
}


