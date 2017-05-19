/* Edited by Raiyan Rahman
*/


function setup() {
    createCanvas(600, 400)// Canvas size
  }
  
function draw() {
    background(0);//background color
    stroke(255);//color of stroke
    strokeWeight(4);//weight of stroke
    noFill();// decides if theres a fill or not, in this case no fill
  
if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 300)  {// if mouse is hoverered over square then color changes, while square if pressed color changes
  if (mouseIsPressed) { // mouse is pressed to change color
    background(0, 255, 0); //sets background color
    }
    fill(255, 0, 200);//color of fill set by rgb values
  }
    rect(300, 200, 100, 100);//  position and weight of rectangle on the blank canvas
}
  
  
  
  
  
  