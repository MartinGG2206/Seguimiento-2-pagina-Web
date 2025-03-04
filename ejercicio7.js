let mensualidad1 = 18000
let mensualidad2 = 35000
let mensualidad3 = 86000
let mensualidad = prompt ("Bienvenido al gimnasio --- , ingrese el número de la mensualidad que desea pagar (1 (15 dias), 2 (30 dias) o 3 (3 meses)):")

if (mensualidad == 1) {
    document.getElementById('mensaje').innerHTML = `El valor de la mensualidad es de $${mensualidad1}`
} else if (mensualidad == 2) {
    document.getElementById('mensaje').innerHTML = `El valor de la mensualidad es de $${mensualidad2}`
} else if (mensualidad == 3) {
    document.getElementById('mensaje').innerHTML = `El valor de la mensualidad es de $${mensualidad3}`
} 