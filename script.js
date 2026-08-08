const slider = document.getElementById("slider");
const imagenes = slider.querySelectorAll("img");

let indice = 0;

function moverCarrusel() {
    slider.style.transform = `translateX(-${indice * 620}px)`;
}

document.getElementById("siguiente").addEventListener("click", () => {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    moverCarrusel();
});

document.getElementById("anterior").addEventListener("click", () => {
    indice--;

    if (indice < 0) {
        indice = imagenes.length - 1;
    }

    moverCarrusel();
});