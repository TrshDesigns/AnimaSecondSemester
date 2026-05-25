const productos = [
 { id : 1, nombre: "Puerta"},
 { id : 2, nombre: "Puerta de hierro"},
 { id : 3, nombre: "Puerta rustica"},
 { id : 4, nombre: "Puerta plastica"}
];

function listarProductos() {
 console.log("--- Lista actual de productos --- " + "\n");
 console.log(productos);
}

function agregarProductos(nombre) {
 const nuevoId = productos.length + 1;
 const nuevoProducto = { id: nuevoId, nombre: nombre };
 productos.push(nuevoProducto);
 console.log(` --- * Producto "${nombre}" --- quedo agregado con ID: ${nuevoId} + "\n"`);
}

function buscarProducto(id) {
 let searched = productos.find(p => p.id === id);
 console.log(` --- se esta buscando ID ---${id}:`, searched + "\n");
}

function modificarProducto(id, nuevoNombre) {
 const producto = productos.find(p => p.id === id);
 if (producto) {
  console.log(" * ... Se esta modificando producto..." + "\n");
  console.log(" ---  Nombre anterior del producto:", producto.nombre + "\n");
  producto.nombre = nuevoNombre;
  console.log(" ---  Nombre nuevo del producto:", producto.nombre + "\n");
 }
}

listarProductos();
agregarProductos("Ventana");       
buscarProducto(2);                
modificarProducto(1, "Puerta blindada");
listarProductos();             
modificarProducto(1, "Marco de madera rustica");
listarProductos();