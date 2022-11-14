function aviso () 
{
    alert("Bem vindo, frangolino!")
}

function change() 
{
    let natacao = document.getElementById("natacao-img")
    let musculacao = document.getElementById("musculacao-img")
    let luta = document.getElementById("luta-img")
    let danca = document.getElementById("danca-img")

    let lista = [natacao, musculacao, luta, danca]

    setInterval(function () { 
        this.mudaStyle(lista)
    } , 2000)

}


function mudaStyle(lista)
{
    setTimeout(function () { 
        lista[0].setAttribute("style", "width: 10vw; height: 20vh;")
        lista[1].removeAttribute("style")
        lista[2].removeAttribute("style")
        lista[3].removeAttribute("style")
    } , 500)

    setTimeout(function () { 
        lista[1].setAttribute("style", "width: 10vw; height: 20vh;")
        lista[0].removeAttribute("style")
        lista[2].removeAttribute("style")
        lista[3].removeAttribute("style")
    } , 1000)

    setTimeout(function () { 
        lista[2].setAttribute("style", "width: 10vw; height: 20vh;")
        lista[1].removeAttribute("style")
        lista[0].removeAttribute("style")
        lista[3].removeAttribute("style")
    } , 1500)

    setTimeout(function () { 
        lista[3].setAttribute("style", "width: 10vw; height: 20vh;")
        lista[1].removeAttribute("style")
        lista[2].removeAttribute("style")
        lista[0].removeAttribute("style")
    } , 2000)
}