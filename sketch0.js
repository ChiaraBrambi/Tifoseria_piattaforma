
let logoIcon;
/////////////////////////////////////////////////////////////////////////

function preload() {
  logoIcon = loadImage("./assets/logopiccolo.png");
}
/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12); //rallenta
}
/////////////////////////////////////////////////////////////////////////
function draw() {
  background('#F9F9F9'); //chiaro
  imageMode(CENTER); //per pittogrammi
  image(logoIcon,  width/2 , height / 2.5, logoIcon.width / 6, logoIcon.height / 6); //stadio

  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //testo centrale
  textSize(25);
  fill('#877B85'); //4° colore PALETTE
  text('TROMBETTA', width / 2, height / 2);
  textSize(20);
  fill('#B7AEB5'); //3 PALETTE
  text('Preparati a tifare', width / 2, height / 1.8);//y
if(mouseIsPressed){
   window.open('index1.html','_self');
}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
