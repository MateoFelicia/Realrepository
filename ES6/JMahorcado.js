let palabras = ["amigo", "barco", "cielo", "donde", 
    "fuego", "gente", "huevo", "lápiz", 
    "mango", "nieve", "papel", "queso", 
    "rocas", "soles", "tigre", "unión", 
    "voces", "zorro", "árbol", "banco", 
    "campo", "diosa", "feliz", "golpe", 
    "honor", "islas", "luzco", "manos", 
    "nubes", "punto", "salud", "tarde", 
    "usado", "valle", "barca", "cinta", 
    "ducha", "focos", "guapo", "horno", 
    "imán", "leche", "moras", "nueva", 
    "plaza", "ratas", "temas", "vejez", 
    "ancho", "bravo", "circo", "dieta", 
    "flaca", "giras", "humor", "ideal", 
    "jugos", "lazos", "menta", "nueve", 
    "palma", "regla", "sonar", "tenis", 
    "urano", "verde", "beber", "cabra", 
    "fresa", "globo", "jaula", "lejos", 
    "monta", "peces", "reina", "sello", 
    "viven", "zafiro", "armas", "baile", 
    "cabos", "dedos", "grito", "hotel", 
    "infla", "jugar", "lamas", "medir", 
    "papas", "radio", "salto", "tinte", 
    "urnas", "virus", "arena", "baño", 
    "camas", "deseo", "fines", "habla", 
    "joven", "lindo", "mover", "noche", 
    "puros", "ratón", "salva", "anexo", 
    "broma", "costa", "fruto", "gatos", 
    "hurto", "junta", "lucir", "mixto", 
    "niñas", "pelos", "rubor", "tenaz", 
    "útil", "volar", "yerba", "zanjo", 
    "altar", "bolso", "corto", "flojo", 
    "grano", "hecho", "luces", "mecha", 
    "nadar", "poder", "razón", "siglo", 
    "terco", "velas", "yogur", "zarza", 
    "avión", "banda", "costo", "dudas", 
    "ganar", "horas", "jorge", "laico", 
    "marco", "noble", "pauta", "ronda", 
    "suelo", "temer", "volca", "álbum", 
    "bebes", "cruel", "denso", "iluso", 
    "jefes", "niños", "pelar", "rumor", 
    "soñar", "unico", "vuelo", "zorra", 
    "ancla", "burla", "coral", "dólar", 
    "furia", "hotel", "inglés", "japon",
    "lucha", "meter", "norma", "punto", 
    "rival", "sueño", "trato", "yermo", 
    "aceite", "acento","ángulo", 
    "bailar", "barrer", "brillo", "botón", 
    "colina", "correr", "dócil", "drama", 
    "entero", "elegir", "fábula", "fijado", 
    "flotar", "gritar", "guitra", "herida", 
    "icono", "impacto", "jaguar", "lógica", 
    "mandar", "noble", "perlas", 
    "pulgas", "ramita", "saltar", "tierra", 
    "valija", "zapato", "zarpar"];

    let mySelect;
    let errores = 0;
    let button;
    let palabra;
    let largoMax = 6;

function setup(){
    createCanvas(800, 600);
    background(200);

    line(0, 500, 800, 500);
    line(600, 500, 600, 0);

    n0 = random(0, palabras.length);
    n0 = floor(n0)
    palabra = palabras[n0]

    button = createButton('adivinar');
    button.position(700, 50);
    button.mousePressed(adivino);


    mySelect = createSelect("letraElegidas");
    mySelect.position(630, 50);
    mySelect.option('a');
    mySelect.option('b');
    mySelect.option('c');
    mySelect.option('d');
    mySelect.option('e');
    mySelect.option('f');
    mySelect.option('g');
    mySelect.option('h');
    mySelect.option('i');
    mySelect.option('j');
    mySelect.option('k');
    mySelect.option('l');
    mySelect.option('m');
    mySelect.option('n');
    mySelect.option('o');
    mySelect.option('p');
    mySelect.option('q');
    mySelect.option('r');
    mySelect.option('s');
    mySelect.option('t');
    mySelect.option('u');
    mySelect.option('v');
    mySelect.option('w');
    mySelect.option('x');
    mySelect.option('y');
    mySelect.option('z');

    square(50, 520, 55, 20);
    square(180, 520, 55, 20);
    square(310, 520, 55, 20);
    square(440, 520, 55, 20);
    square(570, 520, 55, 20);
    square(700, 520, 55, 20);

    console.log(palabra, n0, palabra.length, mySelect.value());
}
function draw(){
    mastil();
    Colgado(errores);
}
function mastil() {
    strokeWeight(4);
    line(100, 300, 250, 300); // Base
    line(175, 300, 175, 100); // Poste vertical
    line(175, 100, 275, 100); // Poste horizontal
    line(275, 100, 275, 150); // Cuerda
}
function Colgado(errores) {
    strokeWeight(2);
    // Dibujar el hombre de palos en función del valor de errores
    if (errores > 0) {
        ellipse(275, 170, 40, 40); // Cabeza
    }
    if (errores > 1) {
        line(275, 190, 275, 250); // Cuerpo
    }
    if (errores > 2) {
        line(275, 210, 250, 230); // Brazo izquierdo
    }
    if (errores > 3) {
        line(275, 210, 300, 230); // Brazo derecho
    }
    if (errores > 4) {
        line(275, 250, 250, 280); // Pierna izquierda
    }
    if (errores > 5) {
        line(275, 250, 300, 280); // Pierna derecha
    }
}

function adivino(){
    let letraElegida = false;
    for (let i = 0; i <= palabra.length; i++) {
        if (palabra[i] === mySelect.value()) {
            letraElegida = true
            pongoletra(i)
        }
    }

    if (letraElegida == false) {
        errores++;
        mySelect.disable(mySelect.value());
    }
}

function pongoletra(i){
    textSize(35);
    text(mySelect.value(), 65 + 130 * i, 560);
}
