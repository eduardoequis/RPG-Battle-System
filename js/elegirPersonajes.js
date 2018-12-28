// Se definen participantes:
let player1 = "Player1"
let player2 = "Player2"

// Se define quién elige primero.
let eligePlayer1 = true

// Elementos del DOM del Menú

let menuPersonajes = document.getElementsByClassName("columns")[0]
let cartaPersonaje = document.getElementsByClassName("column")[0]
let avatarPersonaje = cartaPersonaje.getElementsByTagName('img')[0]
let nombrePersonaje = cartaPersonaje.getElementsByClassName('titulo')[0]
let vidaPersonaje = cartaPersonaje.getElementsByClassName('vidaPersonaje')[0]
let ataque1 = cartaPersonaje.getElementsByClassName('tituloAtaque')[0]
let describeAtaque1 = cartaPersonaje.getElementsByClassName('describeAtaque')[0]
let ataque2 = cartaPersonaje.getElementsByClassName('tituloAtaque')[1]
let describeAtaque2 = cartaPersonaje.getElementsByClassName('describeAtaque')[1]
let indicadorMensajesMenu = document.getElementById("indicadorMensajesMenu")
let fondos = document.getElementsByClassName("fondo")


function cargarPersonajes ()  {

    listadoPersonajes.forEach(function(personaje){
        avatarPersonaje.src = personaje.avatar
        nombrePersonaje.innerText = personaje.nombre
        vidaPersonaje.innerText = personaje.vida
        ataque1.innerText = personaje.ataque1.nombre
        describeAtaque1.innerText = personaje.ataque1.descripcion
        ataque2.innerText = personaje.ataque2.nombre
        describeAtaque2.innerText = personaje.ataque2.descripcion
    
        let nuevaCartaPersonaje = cartaPersonaje.cloneNode(true)
        nuevaCartaPersonaje.style.display = "inline"
        nuevaCartaPersonaje.className += " activo";
        menuPersonajes.appendChild(nuevaCartaPersonaje)
    })

}
cargarPersonajes()

function asignarPersonaje (personajeElegido) {
    for (const personaje of listadoPersonajes) {
        if (personajeElegido === personaje.nombre) {
            return personaje
        }
     }
}

function elegirPersonaje(opcion) {
    
    let nombreOpcion = String(opcion.getElementsByClassName('titulo')[0].innerText)
    let muestraNombre = document.getElementById("jugadores").getElementsByTagName("span")

    if (eligePlayer1) {
        player1 = asignarPersonaje(nombreOpcion)
        muestraNombre[0].innerText = player1.nombre
        indicadorMensajesMenu.innerText = "JUGADOR 2: Elige un personaje"
        eligePlayer1 = false
    } else {
        player2 = asignarPersonaje(nombreOpcion)
        muestraNombre[1].innerText = player2.nombre
        cambiarVista ()

    }
}

let personajesEnMenu = document.getElementsByClassName("column activo")

for (const opcion of personajesEnMenu) {
    opcion.addEventListener("click", function(){elegirPersonaje(opcion)} )
}


 function cambiarVista () {
fondos[1].style.backgroundColor = "red";
    setTimeout(() => {
        console.log("comienza juego")
        fondos[1].classList.add("ocultarFondo");
        fondos[0].classList.remove("ocultarFondo");
        cargarBatalla (player1, player2)
        elegirQuienEmpieza()
    }, 1500);
    
 }

