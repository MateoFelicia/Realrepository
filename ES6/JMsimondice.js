let sprRoj;
let sprAma;
let sprAzu;
let sprVer;
let boton;

let iniciar;
let nroRandom = [];
let secuencia = [0, 0];
let patronJ = [];
let isPlayingSequence = false;
let largo = 4;
let largo_verificacion = 4;
let verificacion = true;
let posicion = 0;

function setup() {
    createCanvas(800, 600);
    background(50);

    textSize(100);
    fill('cyan');
    text('Tote says', 0, 100);

    boton = createButton('Iniciar');
    boton.position(350, 500);
    boton.mousePressed(logica);

    if (!isPlayingSequence) {
        sprRoj = createSprite(300, 250,
            100, 100,);
        sprRoj.shapeColor = color(200, 0, 0);
        sprRoj.onMousePressed = function () {
            sprRoj.shapeColor = color(255, 0, 0);
            patronJ.push(0);
            console.log(patronJ)
        }
        sprRoj.onMouseReleased = function () {
            sprRoj.shapeColor = color(200, 0, 0);
            jugadas();
        }

        sprAma = createSprite(300, 350,
            100, 100);
        sprAma.shapeColor = color(200, 200, 0);
        sprAma.onMousePressed = function () {
            sprAma.shapeColor = color(255, 255, 0);
            patronJ.push(1);
            console.log(patronJ)
        }
        sprAma.onMouseReleased = function () {
            sprAma.shapeColor = color(200, 200, 0);
            jugadas();
        }


        sprAzu = createSprite(400, 350,
            100, 100);
        sprAzu.shapeColor = color(0, 0, 200);
        sprAzu.onMousePressed = function () {
            sprAzu.shapeColor = color(0, 0, 255);
            patronJ.push(2);
            console.log(patronJ)
        }
        sprAzu.onMouseReleased = function () {
            sprAzu.shapeColor = color(0, 0, 200);
            jugadas();
        }

        sprVer = createSprite(400, 250,
            100, 100);
        sprVer.shapeColor = color(0, 200, 0);
        sprVer.onMousePressed = function () {
            sprVer.shapeColor = color(0, 255, 0);
            patronJ.push(3);
            console.log(patronJ)
        }
        sprVer.onMouseReleased = function () {
            sprVer.shapeColor = color(0, 200, 0);
            jugadas();
        }
    }

    //let jugando = true;

    //while (jugando){
        //logica();
    //}

}



function draw() {
    drawSprites();
    

}
//Las teclas se iluminan aleatoriamente y el jugador debe reproducir la secuencia 
//de luz sin cometer un error.
function logica() {
    let isPlayingSequence = true;

    boton.remove();

    nroRandom = random(0, 4);//es un n0 random entre 0 y 3 
    nroRandom = floor(nroRandom);
    secuencia.push(nroRandom); //le doy el numero a la secuencia

    console.log(secuencia)

    for (let i = 0; i < secuencia.length; i++) {
        time = (i + 1) * 2000;
        time2 = (time + 1000);

        if (secuencia[i] == 0) {
            setTimeout(Rojo, time);
        }

        if (secuencia[i] == 1) {
            setTimeout(Amarillo, time);
        }

        if (secuencia[i] == 2) {
            setTimeout(Azul, time);
        }

        if (secuencia[i] == 3) {
            setTimeout(Verde, time);
        }

        setTimeout(aburrido, time2);

    }

    setTimeout(() => {
        isPlayingSequence = false; 
        console.log('Lolo tiempo');
        
    }, secuencia.length * 2000 + 1000);  // Calcula el tiempo total de la secuencia

    //jugadas();
    patronJ = [];

}

function jugadas() {

//    for (x = 0; x <= secuencia.lenght; x++) { 
//        console.log('Entro en el for');
//        if (secuencia[x] != patronJ[x]) {
//            alert("¡MALA memoria!");
//        }
//    }
    if (patronJ.length === secuencia.length) {
            if (patronJ === secuencia) {
                console.log("¡Bien!");
                patronJ = [];
                largo = 0;
                let color_nuevo = floor(random(0, 4));
                secuencia.push(color_nuevo);
            }
        } 
    if (patronJ.length < secuencia.length){
        for (let x = 0; x < secuencia.lenght; x++) { //comparacion uno por uno
            console.log('Entro en el for');
            if (secuencia[x] != patronJ[x]) {
                alert("¡MALA memoria!");
            }
        }
    }

    }



Rojo = () => {
    sprRoj.shapeColor = color(255, 0, 0);
}

Amarillo = () => {
    sprAma.shapeColor = color(255, 255, 0);
}

Azul = () => {
    sprAzu.shapeColor = color(0, 0, 255);
}

Verde = () => {
    sprVer.shapeColor = color(0, 255, 0);
}

aburrido = () => {
    sprRoj.shapeColor = color(200, 0, 0);
    sprVer.shapeColor = color(0, 200, 0);
    sprAma.shapeColor = color(200, 200, 0);
    sprAzu.shapeColor = color(0, 0, 200);
}