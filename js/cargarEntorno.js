let player1 = personajeReptiliano;
let player2 = personajeHechicera;
let turnos = 0

// Carga de botones
let botonAtaque1Player1 = document.querySelectorAll('#player1 .button')[0];
let botonAtaque2Player1 = document.querySelectorAll('#player1 .button')[1];
let botonAtaque1Player2 = document.querySelectorAll('#player2 .button')[0];
let botonAtaque2Player2 = document.querySelectorAll('#player2 .button')[1];

let BotonesPlayer1 = document.querySelectorAll('#player1 .botones')
let BotonesPlayer2 = document.querySelectorAll('#player2 .botones')

BotonesPlayer2.forEach(function(element){element.classList.toggle("desactivado")})

// Carga indicador de mensajes.
let indicador = document.getElementById("indicadorMensajes")


// Cargar elementos DOM.

let nombrePlayer1 = document.getElementById("nombrePlayer1")
let vidaPlayer1 = document.getElementById("vidaPlayer1") 
let imagenPlayer1 = document.querySelectorAll('#player1 .personaje img')[0];

let nombrePlayer2 = document.getElementById("nombrePlayer2")
let vidaPlayer2 = document.getElementById("vidaPlayer2") 
let imagenPlayer2 = document.querySelectorAll('#player2 .personaje img')[0];

function cargarBatalla (player1, player2) {

    // Carga Nombre + Vida
    nombrePlayer1.innerText = player1.nombre
    nombrePlayer2.innerText = player2.nombre

    vidaPlayer1.innerText = player1.vida
    vidaPlayer2.innerText = player2.vida

    // Carga ataques Player 1

    let descripcionAtaque1Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[0]
    botonAtaque1Player1.innerText = player1.ataque1.nombre
    descripcionAtaque1Player1.innerText = player1.ataque1.descripcion

    let descripcionAtaque2Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[1]
    botonAtaque2Player1.innerText = player1.ataque2.nombre
    descripcionAtaque2Player1.innerText = player1.ataque2.descripcion

    // Carga ataques Player 2
    
    let descripcionAtaque1Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[0]
    botonAtaque1Player2.innerText = player2.ataque1.nombre
    descripcionAtaque1Player2.innerText = player2.ataque1.descripcion

    let descripcionAtaque2Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[1]
    botonAtaque2Player2.innerText = player2.ataque2.nombre
    descripcionAtaque2Player2.innerText = player2.ataque2.descripcion

    // Cargar imagenes
    imagenPlayer1.src = player1.imagen
    imagenPlayer2.src = player2.imagen
}

cargarBatalla (player1, player2)