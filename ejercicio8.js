let numero1 = Number(prompt("Ingrese un angulo"))
let numero2 = Number(prompt("Ingrese otro angulo"))
let numero3 = Number(prompt("Ingrese otro angulo"))
let trianguloValido = 180
let suma = (numero1 + numero2 + numero3)

if (suma === 180) {
    document.getElementById('mensaje').innerHTML = `Su triangulo es valido ya que la suma es de sus tres angulos es igual a ${suma}`
} else if(suma != 180) {
     document.getElementById('mensaje').innerHTML = `Su triangulo no es valido ya que la suma de sus tres angulos es igual a ${suma} y no igual a ${trianguloValido}`
}
