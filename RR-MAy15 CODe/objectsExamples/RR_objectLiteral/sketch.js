/*
Example with shapes across the canvas/window using object literal notation.
Edited by Raiyan Rahman
*/

// the code below creates a circle using object literal notation. Everything inside the brackets is local in scope
// and is accessed with dot syntax.
var circle = { // variable set for circle
  x: 200,// multiple object properties, 200 is value of location of x on the canvas grid
  y: 200,// y location set as one of the object properties for the circle variable and in this case 200 (y axis value)
  diam: 50,//diameter value set by 50
  r: 255,// r value in grey scale set by 255 rgb
  g: 123,// g value in grey scale set by 123 rgb
  b: 25 // b value in rgb grey scale set by 25
}

/*
the same circle could be drawn using variables, but objects enable modularity and reusability in code.
code can also be written in fewer lines. for instance;

var circlex = 200;
var circley = 200;
var diam = 50;
var circler = 255;
var circleg = 123;
var circleb = 25;

function setup() {
  createCanvas(400, 400);
}


function draw() {
  background(34, 123, 218);
  noStroke();
  fill(circler, circleg, circleb);
  ellipse(circlex, circley, diam, diam);
  
}
  
 // compare this to code organized with an object.
 */
  
  function setup() {
    createCanvas(400, 400);// canvas size
}


function draw() {
  background(34, 123, 218);// background color value set in rgb
  noStroke();// defines that shape doesnt include stroke or outline 
  fill(circle.r, circle.g, circle.b);// fill  set by values in circle object properties
  ellipse(circle.x, circle.y, circle.diam, circle.diam);// location of x and y, width and heigh of ellipse set by object properties defined circle diam
  
  
}












