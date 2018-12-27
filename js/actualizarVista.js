function actualizarIndicador (texto) {
    indicador.classList.toggle("alter")
    indicador.innerText = texto
}


function actualizarVista (valorAtaque, atacante, atacado) {

    // Activamos botones por turno.

    if (turno === 1) {
        
        BotonesPlayer1.forEach(function(element){element.classList.toggle("desactivado")})
        setTimeout(function(){
            if (valorAtaque !== 0) {
            vidaPlayer1.innerText = player1.vida
            vidaPlayer2.innerText = player2.vida
            document.querySelectorAll('#player2 .personaje img')[0].classList.toggle("herido")
            actualizarIndicador(`¡${atacado.nombre} perdió ${valorAtaque} de vida!`)
            } else {
            vidaPlayer1.innerText = player1.vida
            vidaPlayer2.innerText = player2.vida
            actualizarIndicador(`¡${atacante.nombre} falló! ${atacado.nombre} no recibió daño.`) 
            }
        }, 500)
        if (player2.vida <= 0) { // El contrincante pierde.
       
            setTimeout(function(){mostrarGanador(player1, "player2")}, 2000)

        } else {
            setTimeout(function(){
                BotonesPlayer2.forEach(function(element){element.classList.toggle("desactivado")})
                actualizarIndicador(`¡Es el turno de ${atacado.nombre}!`)
                turno = 2
            }, 2000)
        }
       
        
    } else {
    
        BotonesPlayer2.forEach(function(element){element.classList.toggle("desactivado")})
        setTimeout(function(){
            if (valorAtaque !== 0) {
            vidaPlayer1.innerText = player1.vida
            vidaPlayer2.innerText = player2.vida
            document.querySelectorAll('#player1 .personaje img')[0].classList.toggle("herido")
            actualizarIndicador(`¡${atacado.nombre} perdió ${valorAtaque} de vida!`)
            } else {
                vidaPlayer1.innerText = player1.vida
                vidaPlayer2.innerText = player2.vida
                actualizarIndicador(`¡${atacante.nombre} falló! ${atacado.nombre} no recibió daño.`)
            }
        }, 500)
        if (player1.vida <= 0) { // El contrincante pierde.
        
        setTimeout(function(){mostrarGanador(player2, "player1")}, 3000)
           
        } else {
        setTimeout(function(){
            BotonesPlayer1.forEach(function(element){element.classList.toggle("desactivado")})
            actualizarIndicador(`¡Es el turno de ${atacado.nombre}!`)
            turno = 1
        }, 2000)
        }
    
    }

}

function mostrarGanador(ganador, perdedor) {
    
    document.querySelectorAll(`#${perdedor} .personaje img`)[0].classList.toggle("derrotado")
    document.getElementsByClassName("fondo")[0].classList.toggle("victoria")
    BotonesPlayer1.forEach(function(element){element.style.visibility = "hidden"});
    BotonesPlayer2.forEach(function(element){element.style.visibility = "hidden"});
    actualizarIndicador(`¡${ganador.nombre} GANA!`)
    document.getElementById("ventanaFinal").classList.toggle("visible")
    
}


