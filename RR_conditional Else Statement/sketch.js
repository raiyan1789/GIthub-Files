/*
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if else control structures) in the draw () loop
*/


var circX = 100;
var circY = 300;
var circStroke = 125;
var circR = 255;
var circG = 0;
var circB = 0;
var circSize = 75;
var recX = 300;
var recY = 100;
var recStroke = 35;
var recCol = 0;
var recSize = 75;
var canvBG = 225;
var speed = 2;
var alph = 125; 



function setup() {
   createCanvas (600,600);
}


function draw() {
  background(canvBG);//background color 
  stroke(circStroke);
  fill(circR, circG, circB, alph);
  stroke(circStroke);
  ellipse(circX, circY, circSize, circSize);
  ellipse(circX + 50, circY - 75, circSize, circSize);
  fill(circR, circG, circB, 135);
  
  stroke(recStroke);
  fill(recCol);
  rect(recX, recY, recSize, recSize);
  
  circX = circX + speed;
  recY = recY - speed;
  
  if (circX < width) {
    
    circSize -= 0.2; // circle size will increase by 0.5 through each loop.
    
  } else {
    
    if (circX > width) {
      speed = speed * -3;// speed of the circles going back and forth 
      circSize *= -2;
      
    }
  }
}