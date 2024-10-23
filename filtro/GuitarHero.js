let Arriba;
let ArribaImg;

let Simbolos;

function preload(){
ArribaImg = loadImage

Simbolos = new Group();
}

function setup() {
createCanvas (800, 600);
background(0);


for (let i = 0; i < 10; i++) {
    let s = createSprite(400, 300, 100, 100);  //
    s.shapecolor = color (random);
    Simbolos.add(s);



}

}

function draw() {
fill (234, 52, 185);
rect(60, 1, 160, 599);



drawSprites();
}