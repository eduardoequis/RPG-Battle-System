
function Personaje (nombre, vida, poder, ataque1, ataque2, imagen, avatar) {
    this.nombre = nombre,
    this.vida = vida,
    this.poder = poder,
    this.ataque1 = ataque1,
    this.ataque2 = ataque2,
    this.imagen = imagen,
    this.avatar = avatar
};

let personajeArquera = new Personaje (
"Arquera", 
120, 
20, 
{
nombre: "Flechazo", 
descripcion: "Una flecha que resta 20 de vida",
usar: function(valorPoder) {return valorPoder}
},
{
nombre: "Triple disparo", 
descripcion: "Resta 20, 40 o 60 de vida, o nada.",
usar: function(valorPoder) { let valorMultiplicador =  Math.floor(Math.random() * (5 - 1)); let valorAtaque = valorPoder*valorMultiplicador; return valorAtaque}
},
"images/personajes/arquera.gif",
"images/personajes/arquera_avatar.png"
)



let personajeGuerrero = new Personaje (
    "Guerrero", 
    100, 
    30, 
    {
    nombre: "Ataque directo",
    descripcion: "Resta 30 de vida con su espada",
    usar: function(valorPoder) {return valorPoder}
    },
    {
    nombre: "Doble golpe", 
    descripcion: "Puede restar 60 de vida o fallar",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*2} else {valorAtaque = 0} ; return valorAtaque}
    },
    "images/personajes/guerrero.gif",
    "images/personajes/guerrero_avatar.png"
    )


let personajeReptiliano = new Personaje (
    "Reptiliano", 
    150, 
    15, 
    {
    nombre: "Lanza-Hacha",
    descripcion: "Resta 15 0 30 de vida con su hacha",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*2} else {valorAtaque = valorPoder} ; return valorAtaque}
    },
    {
    nombre: "Estampida", 
    descripcion: "El enemigo o tú pierde 45 de vida",
    usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder*3; return valorAtaque } else { personajeReptiliano.vida -= valorPoder*3; return 0 }}
    },
    "images/personajes/reptiliano.gif",
    "images/personajes/reptiliano_avatar.png"
    )

let personajeHechicera = new Personaje (
        "Hechicera", 
        85, 
        50, 
        {
        nombre: "Embrujo",
        descripcion: "Resta 25 o 50 de vida con magia",
        usar: function(valorPoder) { let valorSuerte = Math.random(); if (valorSuerte >= 0.5) {valorAtaque = valorPoder} else {valorAtaque = valorPoder/2} ; return valorAtaque}
        },
        {
        nombre: "Caos", 
        descripcion: "Resta 80 de vida, pierdes 20 de vida",
        usar: function(valorPoder) { personajeHechicera.vida -= 20; return 80}
        },
        "images/personajes/hechicera.gif",
        "images/personajes/hechicera_avatar.png"
        )

let listadoPersonajes = []
listadoPersonajes.push(personajeArquera, personajeGuerrero, personajeHechicera, personajeReptiliano)








