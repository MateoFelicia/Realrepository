let img;
let pixelSize = 10; // Tamaño del píxel

function preload() {
  img = loadImage('https://tannerhelland.com/images/Secret_of_Monkey_Island-600x375.jpg'); // Carga tu imagen aquí
}

function setup() {
  createCanvas(img.width, img.height);
  noLoop();
}

function draw() {
  background(255);
  img.loadPixels();
  let d = pixelDensity();
  
  for (let y = 0; y < img.height; y += pixelSize) {
    for (let x = 0; x < img.width; x += pixelSize) {
      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;
      
      for (let dy = 0; dy < pixelSize; dy++) {
        for (let dx = 0; dx < pixelSize; dx++) {
          let px = x + dx;
          let py = y + dy;
          if (px < img.width && py < img.height) {
            let index = 4 * ((py * d) * img.width * d + (px * d));
            r += img.pixels[index];
            g += img.pixels[index + 1];
            b += img.pixels[index + 2];
            count++;
          }
        }
      }
      
      r = r / count;
      g = g / count;
      b = b / count;
      
      fill(r, g, b);
      noStroke();
      rect(x, y, pixelSize, pixelSize);
    }
  }
}
