//Scope global
var nombre ="Cristian";

function llamado() {
    //Scope local
    var miApellido="Arce";
    console.log(`Mi nombre es ${nombre} ${miApellido}`);
}

llamado();