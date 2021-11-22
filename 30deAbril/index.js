let marginTop = 0;
let marginLeft = 8;

let marginTop2 = 0;
let marginLeft2 = 0;

let imagen2 = document.getElementById("imagen2");

let imagen = document.createElement("img");
imagen.id = "imagen";
imagen.src = "./rodsquare.jpg";
document.body.appendChild(imagen);

function checkearPosicion() {
    if (imagen.getBoundingClientRect().x == imagen2.getBoundingClientRect().x) {
        imagen.style.visibility = "hidden";
    } else {
        imagen.style.visibility = "visible";
    }
}

function moverIzquierda() {
    marginLeft -= 0.5;
    imagen2.style.marginLeft = marginLeft + "cm";
    checkearPosicion();
}

function moverDerecha() {
    marginLeft += 0.5;
    imagen2.style.marginLeft = marginLeft + "cm";
    checkearPosicion();
}
