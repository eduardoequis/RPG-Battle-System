
// Actualizá el indicador de mensajes.

function actualizarIndicador (texto) {
    indicador.classList.toggle("alter")
    indicador.innerText = texto
}

// Desactiva o activa botones.

function desactivarBotones (atacante) {
    if (atacante === player1) {
        BotonesPlayer1.forEach(function(element){element.classList.toggle("desactivado")})
    } else if (atacante === player2) {
        BotonesPlayer2.forEach(function(element){element.classList.toggle("desactivado")})
    }
}

// Elige el elemento del DOM que representa al personaje atacado. 

function determinarDOMdePersonajeAtacado (atacado) {
    if (atacado === player2) {
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    } else if (atacado === player1) {
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    }
}

function determinarDOMdeAtacante (atacante) {
    if (atacante === player1) {
        return document.querySelectorAll(`#player1 .personaje img`)[0]
    } else if (atacante === player2) {
        return document.querySelectorAll(`#player2 .personaje img`)[0]
    }
}

// Actualiza toda la vista.

function actualizarVista (valorAtaque, atacante, atacado) {

    desactivarBotones(atacante)
    personajeAtacadoDOM = determinarDOMdePersonajeAtacado(atacado)
    personajeAtacanteDOM = determinarDOMdeAtacante(atacante)
    
    setTimeout(function(){

            vidaPlayer1.innerText = player1.vida
            vidaPlayer2.innerText = player2.vida

            if (valorAtaque !== 0) {
            personajeAtacadoDOM.classList.toggle("herido")
            actualizarIndicador(`¡${atacado.nombre} perdió ${valorAtaque} de vida!`)
            } else {
            actualizarIndicador(`¡${atacante.nombre} falló! ${atacado.nombre} no recibió daño.`) 
            }

        }, 500)

        if (atacado.vida > 0 && atacante.vida > 0 ) { // Ambos siguen con vida.
       
            setTimeout(function(){
                // Se activan botones.
                desactivarBotones(atacado)
                actualizarIndicador(`¡Es el turno de ${atacado.nombre}!`)
                turnos += 1
            }, 2000)
           

        } else { // Alguien pierde.

            if (atacado.vida <=0) {
                setTimeout(function(){mostrarGanador(atacante, personajeAtacadoDOM)}, 2000)
            }

            if (atacante.vida <=0) {
                setTimeout(function(){mostrarGanador(atacado, personajeAtacanteDOM)}, 2000)
            }

            // Definir EMPATE
            
           
        }
    
    }

// Muestra al ganador y da fin al juego.

function mostrarGanador(ganador, perdedor) {
    
    perdedor.classList.toggle("derrotado")
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria")
    BotonesPlayer1.forEach(function(element){element.style.visibility = "hidden"});
    BotonesPlayer2.forEach(function(element){element.style.visibility = "hidden"});
    actualizarIndicador(`¡${ganador.nombre} GANA!`)
    document.getElementById("ventanaFinal").classList.toggle("visible")
    
}


