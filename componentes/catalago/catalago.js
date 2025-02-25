import { todosLosProductos } from "./dataproductos.js";
import { item } from "./producto.js";

function cargarProductos() {
    let productos = document.createElement('div')
    productos.className = "productosDiv"
    productos.id = "contenedorTareas";

    let products = todosLosProductos();

    products.forEach((letra) => {
        productos.appendChild(item(letra));
    });

    return productos
}

export { cargarProductos }