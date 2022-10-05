
let wsp = document.querySelector(".wsp");
let nombre = document.querySelector(".nombre");
let dia = document.querySelector(".dia");
let hora = document.querySelector(".hora");
let guardar = document.querySelector(".guardar");

let reserva_nav =  document.querySelector(".reserva_nav");
reserva_nav.addEventListener("click",irAReservas);

let mapa_nav =  document.querySelector(".mapa_nav");
mapa_nav.addEventListener("click",irAMap);

let form = document.querySelector(".login-box");

let carrusel = document.querySelector(".carousel-inner");

let mapa = document.querySelector(".mapa");
let top2 = mapa.getBoundingClientRect().top;
let top3 = form.getBoundingClientRect().top;

guardar.addEventListener("click",reservarEvento);

function reservarEvento(){

    wsp.outerHTML = `<a target=\"_blank\" class=\"wsp\" href=\"https://api.whatsapp.com/send?phone=3413157248&amp;text=Hola,quiero hacer una reserva a nombre de `+ nombre.value +` el dia `+ dia.value +` a las `+ hora.value +` \">Reserva</a>`

    wsp.classList.remove("ocultar");
    guardar.classList.add("ocultar");
}

window.addEventListener("scroll", detectarPosibleCambio);

function detectarPosibleCambio(){
    if(window.scrollY >= top2 / 6){
        mapa.classList.remove("antiwidth");
    }

    if(window.visualViewport.pageTop >= top3 / 2){
        form.classList.remove("opacity0");
    }
}


function irAReservas(){
    window.scrollTo(0, 2000);
}

function irAMap(){
    window.scrollTo(0, top2);
}



