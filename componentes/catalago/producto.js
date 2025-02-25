import { eliminarProducto, marcarProductos } from "./funcionesProductos.js";

function item(contenido) {
    let div = document.createElement('div');
    div.className = "divProducto";

    let imgBox = document.createElement('div');
    imgBox.className = "imgBox";
    div.appendChild(imgBox);

    let imagen = document.createElement('img');
    imgBox.appendChild(imagen);

    let nametarea = document.createElement('div');
    nametarea.className = "nameTarea";
    nametarea.innerText = contenido;
    div.appendChild(nametarea);

    let div2 = document.createElement('div')
    div2.className = "priceAndBoton"
    div.appendChild(div2)

    let price = document.createElement('div')
    price.className = "priceDiv"
    price.innerText = "Q. 00.00"
    div2.appendChild(price)

    let eliminar = document.createElement('div')
    eliminar.className = "eliminarDiv"
    eliminar.innerText = "Eliminar"
    div2.appendChild(eliminar)

    marcarProductos(div)
    eliminarProducto(div)

    return div;
}

export {item}