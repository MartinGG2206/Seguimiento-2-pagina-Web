function pedidoSandwich() {
    let tamano = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    let precio = 0;
    
    if (tamano === "pequeño") {
        precio = 6000;
    } else if (tamano === "grande") {
        precio = 12000;
    } else {
        alert("Tamaño inválido. Por favor, elija 'pequeño' o 'grande'.");
        return;
    }
    
    let tocineta = prompt("¿Desea agregar tocineta? (si/no)").toLowerCase();
    if (tocineta === "si") {
        precio += 3000;
    }
    
    let jalapeno = prompt("¿Desea agregar jalapeño? (si/no)").toLowerCase();

    
    let pavo = prompt("¿Desea agregar pavo? (si/no)").toLowerCase();
    if (pavo === "si") {
        precio += 3000;
    }
    
    let queso = prompt("¿Desea agregar queso? (si/no)").toLowerCase();
    if (queso === "si") {
        precio += 2500;
    }
    
    document.getElementById('mensaje').innerHTML = `El precio total de su sándwich es de $${precio}.`;
}

pedidoSandwich();

