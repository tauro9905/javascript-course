//Traduce a código JavaScript las variables del ejemplo 
//anterior y deja tu código en los comentarios.

var nombre = "Cristian";
var apellido ="Arce";
var userPlatzi = "tauro9905";
var edad = 20;
var correo="cris@gmail.com";
var mayorEdad = true;
var dinero =10000000000;
var deudas  = 223333.23;

var dineroReal = dinero-deudas;


// Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

//Nombre completo (nombre y apellido)
console.log(`Hola este es el nombre ${nombre} ${apellido}`);
//Dinero real (dinero ahorrado menos deudas)
console.log (dineroReal);

//Convierte el siguiente código en una función, pero, cambiando cuando sea necesario
// las variables constantes por parámetros y argumentos en una función:
const nombre = "Juan David ";
const lastname = "Castro Gallego";
const completeName = nombre + lastname;
const nickname = "juandc";

function saludo(completeName, nickname) {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

saludo(completeName,nickname);

//const tipoDeSuscripcion = "Basic";

/* switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
 } */
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

if (tipoDeSuscripcion === "Free"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion === "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Error");
}

//Reto condicional
const tipoSuscripcion = [
    {
        Tipo: "Free",
        Desc: "Solo puedes tomar los cursos gratis",
    },
    {
        Tipo: "Basic",
        Desc: "Puedes tomar casi todos los cursos de Platzi durante un mes"
    },
    {
        Tipo: "Expert",
        Desc: "Puedes tomar casi todos los cursos de Platzi durante un año"
    },
    {
        Tipo: "ExpertPlus",
        Desc: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }
];

var respuesta = tipoSuscripcion.find(suscripcion => suscripcion.Tipo ==="Free");


//Replicar con while
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
} */

while (i<5) {
    console.log("El valor de i es" +i)
    i++;
}

//Replicar con while 
/* for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

i=10;
while (i>=2) {
    console.log("El valor de i es: " + i);
    i--;
}


function verifica(respuesta) {
    console.log("Cuanto es 2 + 2");
    /* let respuesta = prompt("Tu respuesta"); */
    if (respuesta == 4){
        console.log("Respuesta correcta");
    }else{
        console.log("Estudia aritmetica jeje :')");
    }
}


/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */
var array =["Cristian","Andres","Arce"];
function primerElemento(array) {
    console.log("Este es el primer elemento",array[0]);
}

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos 
sus elementos uno por uno (no se vale imprimir el array completo). */

function verArray(array) {
    for(elemento of array){
    console.log(elemento)
    };
}

function verArray(array) {
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        console.log(item);
    }
}

/* Crea una función que pueda recibir cualquier objeto como parámetro e 
imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

var persona ={
    nombre:"Cristian",
    apellido:"Arce",
    edad: 22
}

function verPersona(persona) {
   console.log(Object.values(persona));        
}