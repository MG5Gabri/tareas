function crearHeader() {
    let header = document.createElement('header')
    header.className = "header"
    
    let divImg = document.createElement('div')
    divImg.className = "divImg"
    header.appendChild(divImg)

    let imgLogo = document.createElement('img')
    imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwAk62mwmUPBppveaHsHlVpIQMTegKOfOJZQ&s"
    divImg.appendChild(imgLogo)

    let h1 = document.createElement('h1')
    h1.innerText = "ChillGuy.com"
    h1.className = "tEmpresa"
    header.appendChild(h1)
    
    return header
}

export {crearHeader}