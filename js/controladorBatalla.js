
// Puede ser 1 sola funcion con parametro (ataque, player, contrincante)

function jugador1Ataca (ataque) {

    if (ataque === 1) {
        let valorAtaque = player1.ataque1.usar(player1.poder)
        player2.vida -= valorAtaque
        actualizarVista(valorAtaque, player1, player2)
    } else if (ataque === 2) {
        let valorAtaque = player1.ataque2.usar(player1.poder)
        player2.vida -= valorAtaque
        actualizarVista(valorAtaque, player1, player2)
        
    }
    

    
}


function jugador2Ataca (ataque) {

    if (ataque === 1) {
        let valorAtaque = player2.ataque1.usar(player2.poder)
        player1.vida -= valorAtaque
        actualizarVista(valorAtaque, player2, player1)
        
        
    } else if (ataque === 2) {
        let valorAtaque = player2.ataque2.usar(player2.poder)
        player1.vida -= valorAtaque
        actualizarVista(valorAtaque, player2, player1)
    }
    

    
}

/*
function comprobarGanador (player1, player2) {
    
    if (player1.vida <= 0) {
        mostrarGanador(player2, "player1")

        
    } else if (player2.vida <= 0) {
        mostrarGanador(player1, "player2")
        console.log("gana jugador 2")

    } else {
        return false
    }
}
*/



botonAtaque1Player1.addEventListener("click", function(){jugador1Ataca(1)})
botonAtaque2Player1.addEventListener("click", function(){jugador1Ataca(2)})
botonAtaque1Player2.addEventListener("click", function(){jugador2Ataca(1)})
botonAtaque2Player2.addEventListener("click", function(){jugador2Ataca(2)})

// Desactiva Botones
// BotonesPlayer1.forEach(function(element){element.classList.toggle("desactivado")})




