let ancho = 600;
let largo = 375;
let img;

function preload() { //cargamos imagen
    img= loadImage ('https://tannerhelland.com/images/Secret_of_Monkey_Island-600x375.jpg')

}
function setup(){
    createCanvas (windowHeight, windowWidth);
    image (img, 0, 0);


    for (let pixelX = 0; pixelX < ancho; pixelX ++){
        for (let pixelY = 0; pixelY < largo; pixelY ++){

            let colorpixel = img.get (pixelX,pixelY); //obtenemos el color del pixel
            let prom = (colorpixel[0] + colorpixel[1] + colorpixel[3])/3 ; 




            let nuevocolor; //nueva funcion, si el brillo es menor a 90 es negro, en el caso contrario, es blanco
            if (prom < 180) {
                nuevocolor = 0;
            }else{
                nuevocolor = 255;
                        }
                img.set (pixelX,pixelY,nuevocolor); //actualizamos el valor del pixel 
                    }
            }
        
img.updatePixels();
        }
function draw(){
    image (img, 0, 0);
    
}