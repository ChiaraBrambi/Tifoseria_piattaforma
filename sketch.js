let stadioIcon, trombaIcon, tscuraIcon;//icone
let h;//altezza barra percentuale
let pos;//posizione
let palette = ['#F9F9F9', '#D5D0D3', '#B7AEB5', '#877B85'];

/////////////////////////////////////////////////////////////////////////

function preload() {
  stadioIcon = loadImage("./assets/stadio.png");
  trombaIcon = loadImage("./assets/trombetta.png");//trombetta chiara
  tscuraIcon = loadImage("./assets/tscura.png");//trombetta chiara
}
/////////////////////////////////////////////////////////////////////////
function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F9F9F9');//chiaro

  imageMode(CENTER);//per pittogrammi
  pos =  width / 6;//posizione oggetti

  //testo caratteristiche
  textFont('quicksand');
  textAlign(CENTER, TOP);
  textStyle(BOLD);

  //testo centrale
  textSize(20);
  fill('#877B85'); //4° colore PALETTE
  text('COOD O1', width / 2, height / 11);

  textSize(18);
  fill('#B7AEB5'); //3 PALETTE
  text('Squadra1-Squdra2', width / 2, height / 8);

  //testo laterale
  textSize(15);
  text('capienza', pos * 5, height / 5);
  text('cordinazione', pos, height / 5);

  //percentuale
  text('50%', pos*5, height / 5*4.5);
  text('83%', pos, height / 5*4.5);

  image(stadioIcon, pos*5, height / 7, stadioIcon.width / 7, stadioIcon.height / 7);//stadio

  //barre grige
  fill('#D5D0D3');
  noStroke();
  rectMode(CENTER);
  rect(width /6, height / 6*3.3 , 15, width / 3.5, 20); //rect(x,y,w,h,[tl])
  rect(width /6*5 , height /  6*3.3 , 15, width / 3.5, 20);

  push();
    angleMode(DEGREES);
    noStroke();
    //questo è fondamentale per dopo, quando la barra dovrà alzarsi e abbassarsi!
    translate(width / 2, height / 2);//sposto all origine
    rotate(180); //i vaori della posizione del rettangolosarenno poi invertiti, ma non capisco esattamente come funzionino
    translate(-width / 2, -height / 2);//ritorna in posizione


    //barre viola
    fill('#877B85');
    rect(width / 2, height / 2 , 15, width / 4 / 2, 20);
    rect(width / 2, height /2 , 15, width / 3.5 / 2, 20);
    pop();
}
/////////////////////////////////////////////////////////////////////////
function draw() {
  
noFill( );
  if(mouseIsPressed){//cambia schiacciando la trombetta
      image(trombaIcon, width / 2, height / 2, trombaIcon.width / 7, trombaIcon.height / 7);
      stroke('#B7AEB5');

      strokeWeight(5);
      ellipse(width / 2, height /2, 90);//cerchio centrale
  }else{
    push()
    image(tscuraIcon, width / 2, height / 2, tscuraIcon.width / 7, tscuraIcon.height / 7);// trombetta scura
    stroke('#877B85');
    strokeWeight(5);
    ellipse(width / 2, height / 2, 90);//cerchio centrale
    pop();
    }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
