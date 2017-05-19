/*
Example with multiple shapes across the canvas/window using object literal notation placed in tabs for organization.
Code that references the circle and rectangle are in their own tabs, linked in the HTML document:
<script src="circle.js" type="text/javascript"></script>
<script src="rectangle.js" type="text/javascript"></script>


*/


function setup()  {
    createCanvas(400, 400);// creates canvas and its size
}


function draw() {// sets up the draw function to create shapes
  background(34, 123, 218);// sets the background color
  noStroke();// decides for no stroke
  fill(circle.r, circle.g, circle.b);// fill color based on rgb set values
  ellipse(circle.x, circle.y, circle.diam, circle.diam);// x and why positions of ellipse and circle diameter set by variables
  fill(rectangle.r, rectangle.g, rectangle.b);//rgb values of rectangle fill color
  rect(rectangle.x, rectangle.y, rectangle.diam, rectangle.diam);// rect size and location on canvas
}