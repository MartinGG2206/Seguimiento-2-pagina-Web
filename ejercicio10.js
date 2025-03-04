let diagnosticarComputadora1 = prompt("¿La computadora emite pitidos (Si o No) ?");
let diagnosticarComputadora2 = prompt("¿El disco gira (Si o No) ?");

let diagnosticarComputadora = (respuesta1, respuesta2) => {
    if (respuesta1 == "Si" && respuesta2 == "Si") {
        document.getElementById('mensaje').innerHTML = "Póngase en contacto con el técnico de apoyo"; 
    } else if (respuesta1 == "Si" && respuesta2 == "No") {
        document.getElementById('mensaje').innerHTML = "Verificar contactos de la unidad"; 
    } else if (respuesta1 == "No" && respuesta2 == "No") {
        document.getElementById('mensaje').innerHTML = "Traiga la computadora para repararla en la central"; 
    } else if (respuesta1 == "No" && respuesta2 == "Si") {
        document.getElementById('mensaje').innerHTML = "Compruebe las conexiones de altavoces"; 
    }
};


diagnosticarComputadora(diagnosticarComputadora1, diagnosticarComputadora2);



    