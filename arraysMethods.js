var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// Método Map
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
// (2) [{…}, {…}]
//   0: {nombre: "⌨️", precio: 100}
//   1: {nombre: "🖱", precio: 70}

nombreArticulos; // (5) ["📱", "💻", "🖥", "⌨️", "🚗"]

searchArticulo;// {nombre: '📱', precio: 1000}

forEach; //1000
/* VM1683:2 1500
VM1683:2 2000
VM1683:2 100
VM1683:2 70
VM1683:2 30000 */
