/* created by Professor Dawn
Edited by Raiyan Rahman  NOT MOVE */




var circX;//variable value assigned in terms of shape
circX=200;//position of shape on grid
var circY;//variable value assigned in terms of shape
circY=200;//position of shape on grid
var circStroke = 125;//color of stroke
var circR= 55;// color red on rgb assigned from gray scale 0 to 255
var circG= 135;//color green on rgb assigned from gray scale 0 to 255
var circB= 225;//color blue on rgb assigned from gray scale 0 to 255
var circSize= 75;//size of shape set by value
canvBG = 125, 55, 255;//canvas back ground color set according to RGB 

function setup() {//function setup creates the environment to draw
    createCanvas(400, 400);//Canvas Size
}



function draw() {//draw allows you to create the shapes 
  background(canvBG);//background color or in this case, same as canvBG preset value
  stroke(circStroke);//decides if shape would have stroke
  fill(circR, circG, circB);//color of stroke according to RGB
  stroke(circStroke);//decides if shape would have stroke
  ellipse(circX, circY, circSize, circSize);//positions for shape on the canvas from the set variable (grid)
  ellipse(circX + 50, circY - 75, circSize, circSize);//positions for shape on the canvas from the set variable (grid)
  fill(circR, circG, circB, 135);//color of circles
  
  
circX = circX + 0;//how fast the shape can be moved based on its position
}