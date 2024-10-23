let spr;
let sprEnemy;
let malos;
let enemys;
let puntos = 0;
let vidas = 0;
let Yenemy = -100;

function setup (){
createCanvas(800, 600);


spr = createSprite( //cuadrado, protagonista
    width/2, 550, 40, 40);
        spr.shapeColor = color(255, 100, 0);

        enemys  = new Group(); //esferas enemigas
                for (let i = 0; i < 20; i++) {
                    let e = createSprite(
                        random(25, 775), -100, 25);
                        e.shapeColor = color(random(0, 55));
                        enemys.add(e);
                        e.velocity.y = random(10, 13);
                        e.maxSpeed = random(10, 13);




}
}

function draw (){
    background(50, 160, 253);

    text('vidas:', 10, 50);
    text( vidas, 50, 50);

    if (spr.overlap(enemys)) {
        for (let i = 0; i < enemys.width; i++){
        enemys[i].position.x = -200
        }
        vidas -= 1
        console.log(vidas)
                }
                

    for (let i = 0; i < enemys.length; i++) { //se repiten
        enemys[i].position.y += enemys[i].height * 0.01;
        if (enemys[i].position.y > height) {
        enemys[i].position.y = 0;
        }
    }

    if (keyIsPressed === true) {
        (crearenemigos);
    }





    drawSprites(); //actualizamos frames
}
function keyPressed() {
    if (keyIsDown (65)) {
        spr.position.x -= 30;
    } else if (keyIsDown (68)) {
        spr.position.x += 30;
    }


}
function crearenemigos(){
    sprEnemy = createSprite(
        random(0, 800), -10, 5);
            sprEnemy.shapeColor = color(100);
            sprEnemy.velocity.y = 3.0;
    }