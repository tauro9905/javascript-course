var articulos = [
	{ nombre: 'ð±', precio: 1000 },
	{ nombre: 'ð»', precio: 1500 },
	{ nombre: 'ð¥', precio: 2000 },
	{ nombre: 'â¨ï¸', precio: 100 },
	{ nombre: 'ð±', precio: 70 },
	{ nombre: 'ð', precio: 30000 },
];

// MÃ©todo Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// MÃ©todo Map
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

//Metodo find
var searchArticulo = articulos.find(function (articulo) {
    return articulo.precio === 1000;
})

//Metodo forEach 
articulos.forEach(function (articulo) {
    console.log(articulo.precio);
})


//Filter genera un nuevo array
articulosFiltrados;
// (2) [{â¦}, {â¦}]
//   0: {nombre: "â¨ï¸", precio: 100}
//   1: {nombre: "ð±", precio: 70}

nombreArticulos; // (5) ["ð±", "ð»", "ð¥", "â¨ï¸", "ð"]

searchArticulo;// {nombre: 'ð±', precio: 1000}

forEach; //1000
/* VM1683:2 1500
VM1683:2 2000
VM1683:2 100
VM1683:2 70
VM1683:2 30000 */
