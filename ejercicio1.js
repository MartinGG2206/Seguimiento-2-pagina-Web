let nombre = prompt("Cual es tu nombre?");
let horas = prompt("Cuantas horas trabajaste?");
let salario;
if (horas <= 10) {
    salario = horas * 30000;
} else {
    salario = horas * 33000;
}
console.log(`Señor@ ${nombre}, su de número de horas trabajadas es ${horas} y su salario equivale a $${salario}`)
document.getElementById('mensaje').innerHTML = `Señor@ ${nombre}, su de número de horas trabajadas es ${horas} y su salario equivale a $${salario}`


