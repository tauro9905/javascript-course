var nombres =["Cristian", "Andres", "David", "Jeff"];

console.log(nombres.length); //Tamaño del array

console.log(nombres[0]);//Acceder a un elemento

//Metodos

var masNombres = nombres.push("Jorge"); //Agrega al final del array
var eliminarNombre = nombres.pop("Jorge"); //Elimina el ultimo 
var primerNombre= nombres.unshift("Luis"); //Agrega al principio del array en la posicion [0]


var estudiantes=["Cristian","Sofia","Laura"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// Forma larga
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = array [i];
    saludarEstudiantes(estudiante);
    
}
// Forma corta, variable singular del array en plural

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//While en JS
while (estudiantes.length > 0) {
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}