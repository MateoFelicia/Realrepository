let myInput;
let n;
let button;

function setup (){
    createCanvas(1300, 610);
    background(200);
    
    textSize(60);
    text('Adivina el número', 300, 50);

    square(400, 200, 205);

    button = createButton('Calculo');
    button.position(400, 450);

    myInput = createInput();
    myInput.position(400, 500);
    myInput.attribute('type','number')

    n = random(0, 1000);
    n = floor(n);

    console.log (n);
}

function draw(){
    button.mousePressed(myInput.value() == n ? Igual : Duda);
    
    
}

function Igual (){
    console.log('igual');

    square(400, 200, 205);

    textSize(100);
    text('=', window.width/2-150, 300);
}

function Duda (){
    console.log('duda');
    if (myInput.value() > n ) {
        square(400, 200, 205);
        console.log('mayor');
        text('<', 420, 250);//mayor
    } else {
        square(400, 200, 205);
        console.log('menor');
        text('>', 420, 250);//menor
    }
}