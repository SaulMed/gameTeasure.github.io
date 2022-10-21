let getRandomNumber = limit => {
    return Math.floor(Math.random() * limit);
}

let getDistance = (e, teasure) => {
    //Diferencia de longitudes de X y Y
    let diffX = e.offsetX - teasure.x;
    let diffY = e.offsetY - teasure.y;
    //Obtemer la raiz cuadrada de la suma de los cuadrados de los lados
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    switch (true) {
        case distance < 100:
            return "Estas Hirviendo"
        case distance < 150:
            return "Realmente Caliente"
        case distance < 250:
            return "Frio"
        case distance < 350:
            return "Realmente Frio"
        case distance < 450:
            return "Estas Congelado"
        case distance > 450:
            return "Te encuentras perdido. . ."
    }
}

