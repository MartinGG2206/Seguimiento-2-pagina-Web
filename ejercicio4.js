let notaFisica = prompt("Ingrese la nota de Física:");
let notaQuimica = prompt("Ingrese la nota de Química:");
let notaBiologia = prompt("Ingrese la nota de Biología:");
let notaMatematicas = prompt("Ingrese la nota de Matemáticas:");
let notaInformatica = prompt("Ingrese la nota de Informática:");

let promedio = (parseInt(notaFisica) + parseInt(notaQuimica) + parseInt(notaBiologia) + parseInt(notaMatematicas) + parseInt(notaInformatica)) / 5 * 10;

if (promedio > 80) {
    console.log(`El estudiante ha aprobado con un porcentaje de ${promedio}%`);
    document.getElementById('mensaje').innerHTML = `El estudiante ha obtenido un porcentaje excelente con un valor de ${promedio}%`;
} else if (promedio > 60 && promedio <= 80) {
    console.log(`El estudiante ha reprobado con un porcentaje de ${promedio}%`);
    document.getElementById('mensaje').innerHTML = `El estudiante ha obtenido un porcentaje bueno con un valor de ${promedio}%`;
} else if (promedio > 0 && promedio <= 59.9) {
    console.log(`El estudiante ha reprobado con un porcentaje de ${promedio}%`);
    document.getElementById('mensaje').innerHTML = `El estudiante ha obtenido un porcentaje malo con un valor de ${promedio}%`;
} 