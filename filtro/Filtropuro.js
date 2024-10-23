let ancho = 600;        //variables
let largo = 375;
let img;

function preload() { //cargamos imagen
    img= loadImage ('https://tannerhelland.com/images/Secret_of_Monkey_Island-600x375.jpg')

}
function setup() { 
    createCanvas(windowHeight, windowWidth);
    image (img, 0, 0);

for (let pixelx = 0; pixelx < ancho; pixelx ++) { //escaner
    for (let pixely = 0; pixely < largo; pixely ++) {

let colorpixel = img.get (pixelx,pixely); //obtenemos el color del pixel
    let brillo = brightness(colorpixel); //obtenemos su brillo
    
    let nuevocolor; //nueva funcion, si el brillo es menor a 90 es negro, en el caso contrario, es blanco
    if (brillo < 90) {
        nuevocolor = 0;
    }else{
        nuevocolor = 255;
                }
        img.set (pixelx,pixely,nuevocolor); //actualizamos el valor del pixel 
            }
    }
img.updatePixels(); //actualizamos los pixels
}
function draw(){ //mostramos la nueva imagen en pantalla
image (img, 0, 0);
}