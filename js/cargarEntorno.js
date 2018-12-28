
    
    let turnos = 0

    let fondosBatalla = [
        "images/background/1.png",
        "images/background/2.png",
        "images/background/3.png",
        "images/background/4.png",
        ]

    // Carga de botones
    const botonAtaque1Player1 = document.querySelectorAll('#player1 .button')[0];
    const botonAtaque2Player1 = document.querySelectorAll('#player1 .button')[1];
    const botonAtaque1Player2 = document.querySelectorAll('#player2 .button')[0];
    const botonAtaque2Player2 = document.querySelectorAll('#player2 .button')[1];

    const BotonesPlayer1 = document.querySelectorAll('#player1 .botones')
    const BotonesPlayer2 = document.querySelectorAll('#player2 .botones')

    BotonesPlayer1.forEach(function(element){element.classList.toggle("desactivado")})
    BotonesPlayer2.forEach(function(element){element.classList.toggle("desactivado")})

    // Carga indicador de mensajes.
    const indicador = document.getElementById("indicadorMensajes")


    // Cargar elementos DOM.

    const nombrePlayer1 = document.getElementById("nombrePlayer1")
    const vidaPlayer1 = document.getElementById("vidaPlayer1") 
    const imagenPlayer1 = document.querySelectorAll('#player1 .personaje img')[0];

    const nombrePlayer2 = document.getElementById("nombrePlayer2")
    const vidaPlayer2 = document.getElementById("vidaPlayer2") 
    const imagenPlayer2 = document.querySelectorAll('#player2 .personaje img')[0];

    const reiniciarPartida = document.getElementById("botonReiniciar")
    reiniciarPartida.addEventListener("click", function(){window.location.reload()})

    function cargarBatalla (player1, player2) {

        // Carga Nombre + Vida
        nombrePlayer1.innerText = player1.nombre
        nombrePlayer2.innerText = player2.nombre

        vidaPlayer1.innerText = player1.vida
        vidaPlayer2.innerText = player2.vida

        // Carga ataques Player 1

        const descripcionAtaque1Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[0]
        botonAtaque1Player1.innerText = player1.ataque1.nombre
        descripcionAtaque1Player1.innerText = player1.ataque1.descripcion

        const descripcionAtaque2Player1 = document.querySelectorAll('#player1 .descripcionAtaque')[1]
        botonAtaque2Player1.innerText = player1.ataque2.nombre
        descripcionAtaque2Player1.innerText = player1.ataque2.descripcion

        // Carga ataques Player 2
        
        const descripcionAtaque1Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[0]
        botonAtaque1Player2.innerText = player2.ataque1.nombre
        descripcionAtaque1Player2.innerText = player2.ataque1.descripcion

        const descripcionAtaque2Player2 = document.querySelectorAll('#player2 .descripcionAtaque')[1]
        botonAtaque2Player2.innerText = player2.ataque2.nombre
        descripcionAtaque2Player2.innerText = player2.ataque2.descripcion

        // Cargar imagenes
        imagenPlayer1.src = player1.imagen
        imagenPlayer2.src = player2.imagen

        // Cargar Fondos:

        const fondoElegido = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        fondos[0].style.backgroundImage = `url('${fondosBatalla[fondoElegido]}')`;
    }
