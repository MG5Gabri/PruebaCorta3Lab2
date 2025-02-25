function crearMenu() {
    let menu = document.createElement('header')
    menu.className = "menu"
    
    let divImg = document.createElement('div')
    divImg.className = "divImg"
    menu.appendChild(divImg)

    let imgLogo = document.createElement('img')
    imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAk62mwmUPBppveaHsHlVpIQMTegKOfOJZQ&s"
    divImg.appendChild(imgLogo)

    let divPmarcados = document.createElement('div')
    divPmarcados.className = "menuMarcados"
    menu.appendChild(divPmarcados)

    let h2 = document.createElement('h2')
    h2.innerText = "Productos marcados"
    h2.className = "tEmpresa"
    divPmarcados.appendChild(h2)

    let cTareas = document.createElement('div')
    cTareas.className = "circuloTareas"
    divPmarcados.appendChild(cTareas)
    
    return menu
}

export {crearMenu}