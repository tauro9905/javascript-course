var auto = {
    marca: "Nissan Versa",
    modelo: 2018,
    valor: 38000000,
    detallesAuto: function () {
        //This hace referencia a el objeto
        console.log(`Auto ${this.modelo} ${this.valor}`);
    }
};

auto.detallesAuto();



//Reto crear 30 autos aleatorios


function auto(marca, modelo, valor) {
    this.marca = marca;
    this.modelo = modelo;
    this.valor = valor;
    return auto;
}

var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    1300,
    1233,
    1223,
    4545,
]

var valor = [
    1300,
    1233,
    1223,
    4545,   
]

listaAutos =[];
for (let i = 0; i < 1; i++) {
    var newCarro =  new auto(marca,modelo, valor);
    listaAutos.push(auto);  
}

