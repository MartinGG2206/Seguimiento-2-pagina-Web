let carta1 = Math.floor(Math.random() * 11) + 1;
let carta2 = Math.floor(Math.random() * 11) + 1;
let jugador = carta1 + carta2;
let crupier = Math.floor(Math.random() * 11) + 1;

alert("Tu mano: " + jugador);
alert("Carta del crupier: " + crupier);

let decision = prompt("Tienes " + jugador + ". ¿Quieres otra carta? (s/n)");
if (decision.toLowerCase() === 's') {
    let nuevaCarta = Math.floor(Math.random() * 11) + 1;
    jugador += nuevaCarta;
    alert("Obtuviste: " + nuevaCarta + ". Total ahora: " + jugador);
}

if (jugador > 21) {
    console.log("Te pasaste. Pierdes.");
} else {
    let cartaCrupier = Math.floor(Math.random() * 11) + 1;
    crupier += cartaCrupier;
    alert("El crupier saca: " + cartaCrupier + ". Total ahora: " + crupier);
    
    if (crupier > 21 || jugador > crupier) {
        alert("¡Ganaste!");
    } else if (jugador < crupier) {
        alert("El crupier gana.");
    } else {
        alert("Empate.");
    }
}
