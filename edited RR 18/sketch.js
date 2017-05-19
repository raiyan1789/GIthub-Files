/*
Driver: Raiyan
Typer: Eli
*/

var toppings = [59, "pizza", "mushroom","anchovies", "bell peppers", "jalapenos","extra cheese","triple cheese"];//array play list



function setup(){
  createCanvas(1200,800);// creates canvas and its size
  background(255);//background color based on rgb grey scale
  
  
  
  for (i = 0; i < 8; i++){// for loop uses words from the index
  console.log(toppings[i]);// prints the toppings
  stroke(25);// thickness of text
  fill(random (255) , random(255), random(255), 200);//random text color
  textSize(50);// size of text
  
  
  text(toppings[i], i * 100 + 50, i * 80 + 100);// text increments
  
  }
}


function draw(){
  
  stroke(0);//color of stroke
  strokeWeight(1);//stroke thickness
  fill(255,215,0);// color of circle 
  ellipse(1000, 100, 500, 500);// draws an ellipse with 1000 and 100 being its location and 500 500 is the size
  
  
}
