let genero = prompt("Ingrese su género (M para masculino o F para femenino):");
let edad = prompt("Ingrese su edad:");
const ayudaM = 40000
const ayudaF = 100000
const ayudaF2 = 120000
const ayudaF3 = "No aplica"
if(genero == `M`) {
    document.getElementById('mensaje').innerHTML = `Al ser usted Hombre la alcaldia le proporcionara una ayuda economica de $${ayudaM}`; 
}
else if (genero == `F` && edad >= 30 && edad <= 50) {
    document.getElementById('mensaje').innerHTML = `Al ser usted Mujer entre 30 y 50 años, la alcaldia le proporcionara una ayuda economica de $${ayudaF}`; 
}
else if (genero == `F` && edad >= 51) {
    document.getElementById('mensaje').innerHTML = `Al ser usted Mujer con una edad mayor a 50 años, la alcaldia le proporcionara una ayuda economica de $${ayudaF2}`; 
}
else if (genero == `F` && edad < 30) {
    document.getElementById('mensaje').innerHTML = `Al ser usted Mujer menor de 30 años, la alcaldia no le proporcionara una ayuda economica: ${ayudaF3}`; 
}