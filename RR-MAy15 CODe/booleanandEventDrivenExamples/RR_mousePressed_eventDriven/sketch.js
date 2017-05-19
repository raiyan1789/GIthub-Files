/*
Example that uses mousePressed() to demonstrate event-driven programming. The background shape's color changes when the mouse is pressed.

Edited by Raiyan Rahman
*/

var diam = 200;//ellipse diameter explained by a variable
var bgCol = 255;// background color
var bgSwitch = 0;// variable background switch color

function setup() {
    createCanvas(400, 400);//canvas size
    background(bgCol);//background color set by defined variable
    noStroke();// defines that there is no stroke in the shape
    fill(255, 0, 0);//fill color defined by rgb value on a grey scale
    ellipse(width / 2, height / 2, diam, diam);//ellipse width height and location set by variable,  width and height divided by 2
}


function draw() {
  
    //  noStroke();
    //  fill (255, 0, 0);
    // ellipse(width / 2, height / 2, diam, diam);
}    
  
function mousePressed() { // the mousePressed() function executes once when the mouse is pressed.
                          // mousePressed() is  reserved function built into P5, you only need to call it and include code to be executed.
    background(bgSwitch);//change of background color defined by variable background switch
    noStroke();//defines that shape contains no stroke
    fill(0, 0, 255);//fill color defined by rgb grey scale
    ellipse(width / 2, height / 2, diam, diam);// width and height divided by 2 to center the shape and diam is location of the shape in x and why, defined by variable 
}  
  
