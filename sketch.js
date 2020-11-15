let stadioIcon;
let trombaIcon;
let sfondo;
let palette =['#F9F9F9','#D5D0D3','#B7AEB5', '#877B85'];
let p,p1;
let tt3 = 'cordinazione';
let tt4 = 'capienza';


function preload(){
sfondo = loadImage("./assets/SFONDO.png");
stadioIcon = loadImage("./assets/stadio.png");
trombaIcon = loadImage("./assets/trombetta.png");
}

function setup() {
createCanvas(windowWidth,windowHeight)
background('#F9F9F9');
//background(sfondo);
imageMode(CENTER);

//text
fill('#877B85');//4PALETTE
textAlign(CENTER, TOP);//text(str,x,y,[x2],[y2])
textStyle(BOLD);
text('COOD O1',width/2,height/11);
text('Squadra1-Squdra2',width/2,height/9);
text('capienza',width/7*6,height/9);



//pittogrammi
   image(stadioIcon, width/7*6,height/7, stadioIcon.width/7 , stadioIcon.height/7);
   image(trombaIcon, width/2,height/2, trombaIcon.width/7 , trombaIcon.height/7);
  //barre
  //ellipse(width/2,height/2,10,width/4);
  rectMode(CENTER);
  noStroke();
  fill('#D5D0D3');
  rect(width/7,height/2,10,width/3.5);
  rect(width/7*6,height/2,10,width/3.5);
}

function draw() {

}
