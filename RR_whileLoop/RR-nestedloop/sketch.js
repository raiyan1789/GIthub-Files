/*
nested loop that draws rectangles to the canvas.
*/




function setup() {
  createCanvas(600, 400);
  background(0, 64, 135);
}

function draw() {
  strokeWeight(4);
  stroke(255);
  
  for (var i = 10; i <= width; i+= 30) { // for every 60 that is added there is an i , the rectangles get spaced out.
    for (var j = 10; j <=height; j +=30){// for every j add 60. Spaces rectangles out.
      fill(mouseX, random(255), mouseY); // fill based on a random value and the moudr position
      rect(i, j, 100, 15); // draw at i, j for each rectangle's x and y position.
    }
  }  
}