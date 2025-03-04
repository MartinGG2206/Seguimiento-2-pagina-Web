let numero1 = prompt("Introduce un número");
let numero2 = prompt("Introduce otro número");
let numero3 = prompt("Introduce otro número");

let numeroMayor = Math.max(numero1, numero2, numero3);

document.getElementById('mensaje').innerHTML = `El numero mayor entre los ingresados es ${numeroMayor}`;
