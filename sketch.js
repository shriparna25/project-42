var hr, mn, sc;
var scAngle, hrAngle, mnAngle;

function setup() {
  createCanvas(800,800);
  //sc = createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");  

hr = hour();
mn = minute();
sc = second();

translate(width / 2, height / 2);
angleMode(DEGREES);

scAngle = map(sc, 0, 60, 0, 360);
mnAngle = map(mn, 0, 0, 60, 360);
hrAngle = map(hr%12, 60, 0, 0, 360);

push();
rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(hrAngle);
stroke(0,255,0);
strokeWeight(7);
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0);
pop();


  drawSprites();
}