import { cargarProductos } from "./componentes/catalago/catalago.js"
import { crearMenu } from "./componentes/menu/menu.js"

let DOM = document.querySelector("#root")

function iniciarApp(DOM) {

    DOM.appendChild(crearMenu())
    DOM.appendChild(cargarProductos())

    return DOM
}

iniciarApp(DOM)