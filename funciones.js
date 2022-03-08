//Declarativas

function miFuncion() {
    return 3;
}

//Expesion o anonimas

var miFuncion= function(a,b) {
    return a * b;
}

miFuncion(5,7);


//Ejemplo funcion console.log
function saludarEstudiante(estudiante){
    console.log(`Hola ${estudiante}`);
}

saludarEstudiante("Andres");

//Funcion sin console log
function multipicacion(a,b) {
    var resultado = a * b;
    return resultado;
}

multipicacion(5,2)