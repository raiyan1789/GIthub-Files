/*
Uses while () and for loop() to draw rectangles to the canvas on the y axis.
*/



function setup() {
  createCanvas(600, 400);//canvas size    
  }

function draw() {
    background(14, 56, 105);//background color
    
    var y = 0;//  defines variable y
    while (y <= height) { //  height of the y variable
      stroke(0);// decides if strok or no stroke    
      fill(255); //color for fill
      rect(200, y, 50, 50);//  rect size and position 
      y = y + 50;// adds 50 to the current position of y
      }
  
for (y = 0; y <= height; y += 50) { // height of variable 
  stroke(255);// stroke color
  fill(0);// fill color
  rect(400, y, 100, 100);//rect position 
}
  
  
  
}