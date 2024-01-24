    let circulo = document.querySelector(".circulo")
    let imgCopo = document.querySelector(".starbucks")
    let botao = document.querySelector(".botao")
    let nome = document.querySelector(".nome")

    let verde = document.querySelector(".verde")
    let salmao = document.querySelector(".salmao")
    let rosa = document.querySelector(".rosa")

    verde.addEventListener("click", () => {
        imgCopo.src = "./img/img1.png"
        circulo.style.background = "#017143"
        botao.style.background =  "#017143";
        nome.style.color = "#017143";
    })

    salmao.addEventListener("click", () => {
        imgCopo.src = "./img/img2.png"
        circulo.style.background = "#eb7495"
        botao.style.background =  "#eb7495";
        nome.style.color = "#eb7495";
    })

    rosa.addEventListener("click", () => {
        imgCopo.src = "./img/img3.png"
        circulo.style.background = "#d752b1"
        botao.style.background =  "#d752b1";
        nome.style.color = "#d752b1";
    })