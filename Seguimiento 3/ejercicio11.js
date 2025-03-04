let modeloAutomovil = prompt("Ingrese su modelo de automovil")
let modelosDefectuosos = [119, 179 , 189 , 190 , 191 , 192 , 193 , 194 , 195 , 221 , 780];
if (modelosDefectuosos.includes(parseInt(modeloAutomovil))) {
    document.getElementById('mensaje').innerHTML = "El automóvil esta defectuoso, llevar a garantía"; 
} else {
    document.getElementById('mensaje').innerHTML = "Su automóvil no está defectuoso";
}