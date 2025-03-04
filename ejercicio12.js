let operador = prompt ("A que operador pertenece (Claro, Movistar o Tigo)")
let nMin = Number(prompt ("¿Cuanto Minutos Internacionales consumio?: "))
if (operador === `Tigo`) {
    cargoFijo = 45000
    minInternacional = nMin * 200
    paqueteDatos = 12000
    cargoTotal = cargoFijo + minInternacional + paqueteDatos
    document.getElementById('mensaje').innerHTML = `Estimado usuario, al usted tener el operador ${operador}, su cargo de este mes sera de $${cargoTotal}`
} else if 
    (operador === `Claro`) {
        cargoFijo1 = 30000
        minInternacional1 = nMin * 100
        paqueteDatos1 = 18000
        cargoTotal1 = cargoFijo1 + minInternacional1 + paqueteDatos1
        document.getElementById('mensaje').innerHTML = `Estimado usuario, al usted tener el operador ${operador}, su cargo de este mes sera de $${cargoTotal1}`
 } else if (operador === `Movistar`) {
        cargoFijo2 = 40000
        minInternacional2 = nMin * 250
        paqueteDatos2 = 8000
        cargoTotal2 = cargoFijo2 + minInternacional2 + paqueteDatos2
        document.getElementById('mensaje').innerHTML = `Estimado usuario, al usted tener el operador ${operador}, su cargo de este mes sera de $${cargoTotal2}`
    } 