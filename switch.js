var temp =  false;
switch (temp) {
    case (true):
        console.log("Caso 1");
        break;
    case (false):
        console.log("Caso 2");
    default:
        break;
}

//Reto piedra, papel o tijera con switch
var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function gameChallenge(player,pc) {
    switch (true) {
        case (player === pc):
            console.log("Empate");            
            break;
        case (player ==="Piedra" && pc ==="Tijera" || player==="Tijera" && pc==="Papel" || player==="Papel" && pc==="Piedra" ):
            console.log("Ganaste");
            break;    
        default:
            console.log("Perdiste");
            break;
    }    
    
}

gameChallenge("Tijera","Piedra");