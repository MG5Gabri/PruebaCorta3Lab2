function marcarProductos(div) {
    div.addEventListener("click", () => {
        div.classList.toggle("marcado"); 
    });
}

function eliminarProducto(div) {
    let botonEliminar = div.querySelector(".eliminarDiv"); // Busca el botón dentro del div

    if (botonEliminar) {
        botonEliminar.addEventListener("click", (event) => {
            event.stopPropagation(); // Evita que se active otro evento al hacer clic
            div.remove(); // Elimina el producto del DOM
        });
    } else {
        console.error("No se encontró el botón eliminar dentro del div");
    }
}



export { marcarProductos, eliminarProducto }