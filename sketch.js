let stadioIcon;
let trombaIcon;
let sfondo;
let tt = 'Happy Halloween';
let tt2 = 'Quanto sei zuccone?  Urla Boooooo per far salire lo ZuccoMetro'
let tt3 = '- ZuccoMetro'
let tt4 = 'Press enter for result'
function preload(){
sfondo = loadImage("./assets/SFONDO.png");
stadioIcon = loadImage("./assets/stadio.png");
trombaIcon = loadImage("./assets/trombetta.png");
}

function setup() {
createCanvas(windowWidth,windowHeight)
//background('Cultured');
background(sfondo);
}

function draw() {

   image(stadioIcon, width/2,height/2, stadioIcon.width , stadioIcon.height);
}
