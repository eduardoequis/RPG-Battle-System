
function jugadorAtaca (player, ataque, contrincante) {

    let valorAtaque = 0

    if (ataque === 1) {
        valorAtaque = player.ataque1.usar(player.poder)
        
    } else if (ataque === 2) {
        valorAtaque = player.ataque2.usar(player.poder)
    }

    contrincante.vida -= valorAtaque
    actualizarVista(valorAtaque, player, contrincante)

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

botonAtaque1Player1.addEventListener("click", function(){jugadorAtaca(player1,1,player2)})
botonAtaque2Player1.addEventListener("click", function(){jugadorAtaca(player1,2,player2)})
botonAtaque1Player2.addEventListener("click", function(){jugadorAtaca(player2,1,player1)})
botonAtaque2Player2.addEventListener("click", function(){jugadorAtaca(player2,2,player1)})





