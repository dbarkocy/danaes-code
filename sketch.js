function setup() {
  createCanvas(400, 400);
}

//Vars for left record
var xPosLeft = 100;
//Vars for right record
var xPosRight = 300;
//Vars for top record
var yPosTop = -100;

function draw() {
//Wall
  background(220);
  fill(246, 244, 233);
  rect(-10,-10, 420,420);
  noStroke()
  fill(237, 210, 246);
  rect(20,0,3,400);
  noStroke()
  fill(210, 246, 212);
  rect(50,0,3,400);
  fill(210, 246, 212);
  rect(50,0,3,400);
  fill(210, 236, 246);
  rect(80,0,3,400);
  fill(237, 210, 246);
  rect(110,0,3,400);
  fill(210, 246, 212);
  rect(140,0,3,400);
  fill(210, 236, 246);
  rect(170,0,3,400);
  fill(237, 210, 246);
  rect(200,0,3,400);
  fill(210, 246, 212);
  rect(230,0,3,400);
  fill(210, 236, 246);
  rect(260,0,3,400);
  fill(237, 210, 246);
  rect(290,0,3,400);
  fill(210, 246, 212);
  rect(320,0,3,400);
  fill(210, 236, 246);
  rect(350,0,3,400);
  fill(237, 210, 246);
  rect(380,0,3,400);
//Top Record
  fill(85,85,85);
  ellipse(200,yPosTop++,100);
  fill(237, 210, 246);
  ellipse(200,yPosTop++,30);
  fill(0,0,0);
  ellipse(200,yPosTop++,5);
//Left Record
  fill(85,85,85);
  ellipse(xPosLeft++,250,100);
  fill(210, 236, 246);
  ellipse(xPosLeft++,250,30);
  fill(0,0,0);
  ellipse(xPosLeft++,250,5);
//Right Record
  fill(85,85,85);
  ellipse(xPosRight--,250,100);
  fill(210, 246, 212);
  ellipse(xPosRight--,250,30);
  fill(0,0,0);
  ellipse(xPosRight--,250,5);
}