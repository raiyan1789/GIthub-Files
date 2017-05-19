/*
Created by Raiyan Rahman 
*/




function setup() {
  createCanvas(400,400);
  
  
  
                  }



function draw() {//draws the shape and its attributes
  background(255)//background color
  strokeWeight (4)//size of stroke weight
  rect(100, 150, 250, 100)//rect size and position on canvas
  
  triangle(100, 75, 100, 50, 250, 150);//triangle x1, y1, x2, y2, x3, y3 
  
  triangle(100, 75, 100, 50, 300, 145)//triangle x1, y1, x2, y2, x3, y3 
  
  line(100, 250, 350, 150);//line(x1,y1,x2,y2)
  
  line(100, 150, 350, 250);//line(x1,y1,x2,y2)
  
  arc(50, 50, 80, 80, 0, PI+QUARTER_PI, CHORD);//arc(a,b,c,d,start,stop,[mode])
  
  
  
  
  
  
  
}