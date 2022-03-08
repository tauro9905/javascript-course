/* 
1. Crear variables
2. Crear fucnion con parametro
3. Crear validacion */

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function playGame(player,pc) {
    if (player==="Piedra" && pc==="Tijera") {
        console.log(`El jugador gano`);
    }else if (player==="Tijera" && pc==="Papel") {
        console.log(`El jugador gano`);
    }else if (player==="Papel" && pc==="Piedra") {
        console.log(`El jugador gano`);
    }else if (player === pc){
        console.log("Empate");
    }else{
        console.log("Perdiste");
    }    
}
