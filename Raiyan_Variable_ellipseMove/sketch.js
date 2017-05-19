/*
Created by Raiyan Rahman

*/

var rectY;//variable value assigned in terms of shape
rectX=300;//position of shape on grid
var rectX;//variable value assigned in terms of shape
rectY=200;//position of shape on grid
var rectStroke = 255;//color of stroke
var rectR= 56;// color red on rgb assigned from gray scale 0 to 255
var rectG= 20;//color green on rgb assigned from gray scale 0 to 255
var rectB= 50;//color blue on rgb assigned from gray scale 0 to 255
var rectSize= 200;//size of shape set by value
canvBG = 12, 55, 255;//canvas back ground color set according to RGB 

function setup() {
    createCanvas(600, 600);//Canvas Size
}


function draw() {
  background(canvBG);//background color
  stroke(rectStroke);//decides if shape would have stroke
  strokeWeight(30);//weight of stroke assigned by numeric value
  fill(rectR, rectG, rectB);
  stroke(rectStroke);//decides if shape would have stroke
  rect(rectX - 50, rectY - 200, rectSize, rectSize);//positions for shape on the canvas from the set variable (grid)
  rect(rectX + 25, rectY + 50, rectSize, rectSize);//positions for shape on the canvas from the set variable(grid)
  fill(rectR, rectG, rectB, 135);//color of circles
  
  
rectY = rectY + 1; //how fast the shape can be moved based on its position
  
  
}