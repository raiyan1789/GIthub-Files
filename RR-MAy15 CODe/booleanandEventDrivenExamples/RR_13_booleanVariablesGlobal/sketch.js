/*
edited by Raiyan Rahman
*/

var on = false;//boolean variable

function setup() {
  createCanvas(600, 400);// size of canvas
  }
  
  function draw() {
    if (on) {//if statement
      background(0, 255, 0);// color of background
    } else {
      background(0);//color of background
      }
      
  stroke(255);//stroke color based on rgb grey scale
  strokeWeight(4);//weight of stroke
  noFill();// decides if no fill
  
  if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {// if mouse is presed on square then color changes
    fill(255, 0, 200);//fill color
    }
    rectMode(CENTER);//position of rectangle set by "center"
    rect(300, 200, 100, 100);//rectangle location and width/height on the canvas
  }
  
  function mousePressed() {
    if (mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250) {// if mouse is pressed again , then background color changes
      // if (on) {
      // on = false
      //} else {
      // on = true;
      // }
      on = !on;
      }
      }
    
  
  
    
    
    
    
    
  