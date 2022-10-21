const WIDTH = 550;
const HEIGTH = 550;

const map = document.getElementById("map");
const info = document.getElementById("hintDistance");
let cont = 0;

let mapTeasure = {
    x: getRandomNumber(WIDTH),
    y: getRandomNumber(HEIGTH)
}
    //Verificar por que el mapTeasure excede las dimensiones de la imagen
map.addEventListener('click', (e) => {
    cont++;
    let distance = getDistance(e, mapTeasure);
    console.log(mapTeasure)
    console.log(e.offsetX, e.offsetY)
    let distanceHint = getDistanceHint(distance);
    info.innerHTML = distanceHint;
    if (distance < 50) {
        alert(`Felicidades, has encontrado el tesoro despues de ${cont} clicks.`);
        location.reload();
    }
});


