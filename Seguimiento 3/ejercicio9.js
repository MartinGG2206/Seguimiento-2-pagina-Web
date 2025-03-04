let nCopias = Number(prompt("Ingrese el numero de copias que quiere sacar"))
let nCopias1 = nCopias * 120
let nCopias2 = nCopias * 100
let nCopias3 = nCopias * 80
let nCopias4 = nCopias * 50
if (nCopias > 0 && nCopias <= 499 ) {
    document.getElementById('mensaje').innerHTML = `El precio por imprimir ${nCopias} es de $${nCopias1}`; 

}else if (nCopias > 500 && nCopias <= 749 ) {
    document.getElementById('mensaje').innerHTML = `El precio por imprimir ${nCopias} es de $${nCopias2}`; 
}else if (nCopias > 750 && nCopias <= 999 ) {
    document.getElementById('mensaje').innerHTML = `El precio por imprimir ${nCopias} es de $${nCopias3}`; 
}else if (nCopias >= 1000 ) {
    document.getElementById('mensaje').innerHTML = `El precio por imprimir ${nCopias} es de $${nCopias4}`; 
}