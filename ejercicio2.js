let numero = prompt("Ingrese un numero");
if (numero % 2 === 0) {
    console.log("El número es par");
    document.getElementById('mensaje').innerHTML = `El numero es par`

} else {
    console.log("El número es impar");
    document.getElementById('mensaje').innerHTML = `El numero es impar`

}
