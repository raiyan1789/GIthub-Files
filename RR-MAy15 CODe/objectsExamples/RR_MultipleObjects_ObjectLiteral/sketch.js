/*
Example with mulitple shapes across the canvas/window using object literal notation.
Edited By Raiyan Rahman
*/


var circle = { //object that is defined by many values
  x: 200,// location of circle on x axis
  y: 200,// location of circle on y axis
  diam: 50,// variable named diameter set by the value of 50
  r: 255,//r value of color in rgb
  g: 123,//g value of color in rgb
  b: 25,// b value of color in rgb
}


var rectangle = {// variable set by rectangle
  x: 100,// position of rectangle on the x axis
  y: 100,// position of rectangle on y axis
  diam: 75,// diameter of rectangle set by value of 75
  r: 15,//r value in rgb
  g: 33,// g value in rgb
  b: 255// b value in rgb
}


function setup()  {
  createCanvas(400, 400);// canvas size
}


function draw() {
  background(34, 123, 218);// background color set by rgb value
  noStroke();// defines that it doesnt have any stroke
  fill(circle.r, circle.g, circle.b);// object properties , color set by rgb
  ellipse(circle.x, circle.y, circle.diam, circle.diam);//object properties and location of object on canvas
  fill(rectangle.r, rectangle.g, rectangle.b);// object properties of rectangle and color of rectangle set by grey scale/rgb
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);// object property location of rectangle and location set by pre set variable
}
