let edad = 13;

edad >=14 ? console.log("No tienes la edad suficiente para subirte a la atraccion") : console.log("Tienes la edad suficiente para subirte a la atraccion");

let numero = 5;

numero % 2 === 0 ? console.log("El numero es par") : console.log("El numero es impar");

let ocupacionTeatro = false
let nombreTeatro = "Teatro Colon";

let mensaje = ocupacionTeatro ? `El teatro ${nombreTeatro} esta ocupado` : `El teatro ${nombreTeatro} tiene asientos disponibles`;
console.log(mensaje);

const Usuario="mgil_559@unihumboldt.edu.co";
const contrasena = "123456";

Usuario== "mgil_599@unihumboldt.edu.co" && contrasena === "123456" ?
 console.log("Bienvenido") : console.log("Usuario o contraseña incorrectos, intenta de nuevo")

let colorSemaforo = "verde";
colorSemaforo === "verde" ? console.log("Puede pasar") :
colorSemaforo === "rojo"  ? console.log("No puede pasar") :
colorSemaforo === "amarillo" ? console.log("Pase con precaucion") :
console.log("Color no valido");

let deuda = 1000000;
let dineroActual = 500000;
if(deuda > dineroActual){
    console.log("No tienes suficiente dinero para pagar la deuda");    
} 

let tipoUsuario = "discapacitado";
if(tipoUsuario === "discapacitado"){
    console.log(`Vaya a la fila preferencial por ser ${tipoUsuario}` );
}else if(tipoUsuario === "Sano"){
    console.log("Vaya a la fila normal");
}

let usarioBaseDatos = "Martin Gil Garcia";
let claveBaseDatos = "123456";
let nombreUsuario = "Martin Gil Garcia";
let claveIngresada = "123456";
if(usarioBaseDatos === nombreUsuario && claveBaseDatos === claveIngresada){
    console. log(`${nombreUsuario} Bienvenido a la plataforma`);
    } 

let norte = false;
let sur =false ;
let este = true;
let oeste = false;
if(norte){
    console.log("Dirijase al norte");
}
else if(sur){
    console.log("Dirijase al sur");
}
else if (este){
    console.log("Dirijase al este");
}
else if(oeste){
    console.log("Dirijase al oeste");
}else{
    console.log("No se ha seleccionado ninguna direccion");
}

let prendido = true
let velocimetro = 70;
if(prendido)
   if(prendido){
    console.log("La moto esta prendida");
    if(velocimetro > 50 ){
        console.log("Vas a exceso de velocidad");
    }else{
        console.log("Vas a una velocidad segura");
    }
}

let fecha = "2021-10-10";
let citaMedica = "Pediatria";
if(fecha === "2021-10-10" && citaMedica === "Pediatria"){
    console.log("Tiene una cita medica de pediatria el dia de hoy");
}

