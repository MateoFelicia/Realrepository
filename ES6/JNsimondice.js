function setup() {
    createCanvas(800, 600);
    background(50);

    textSize(100); //título
    fill('cyan');
    text('Tote says', 0, 100);

    //boton = createButton('Iniciar'); //boton para empezar
    //boton.position(350, 500);

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
        control();
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
        control();
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
        control();
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
        control();
    }
    //cuadrados;
    control;
    //jugadas;
}

function draw() {
    drawSprites();
    

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


function control() {
    console.log("controlado bro");

    if (patronJ.length === secuencia.length) { //si la secuencia del jugador y de la maquina son igual de largas
        if (patronJ === secuencia) { //si lo que puso el jugador == secuencia del bot
            console.log("¡Bien!");
            patronJ = []; //se reinicia el patrón del jugador
            largo = 0;
            let color_nuevo = floor(random(0, 4)); //se elige un color aleatorio
            secuencia.push(color_nuevo); //se pushea a la secuencia de la maquina
        }
    } 

if (patronJ.length < secuencia.length){ //si la secuencia del jugador no terminó
    for (let x = 0; x < secuencia.lenght; x++) { //comparacion uno por uno
        console.log('Entro en el for'); //avisa
        if (secuencia[x] != patronJ[x]) { //y si, comparando cada posicion, hay un error 
            alert("¡MALA memoria!");
        }
    }
}
}

function logica() {
    //isPlayingSequence == true;
    console.log("logico bro");
    
    //boton.remove();

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
        isPlayingSequence == false; 
        console.log('Lolo tiempo');
        
    }, secuencia.length * 2000 + 1000);  // Calcula el tiempo total de la secuencia

    //jugadas();
    patronJ = [];

}



let patronJ = [];
let secuencia = [];
let largo = patronJ.length;
let isPlayingSequence = true;

if (isPlayingSequence == true) {
    logica;
}
//logica;
control;