/*
Driver: Raiyan
Typer: Eli
*/

var toppings = ["pineapple", "pizza", "mushroom","anchovies", "bell peppers", "jalapenos","extra cheese","triple cheese"];



function setup(){
  createCanvas(1200,800);
  background(25, 75, 100);
  
  
  
  for (i = 0; i < 8; i++){
  console.log(toppings[i]);
  stroke(25);
  fill(random (255) , random(255), random(255));
  textSize(50);
  
  
  text(toppings[i], i * 100 + 50, i * 50 + 100);
  
  }
}


function draw(){
  
  
  
}
