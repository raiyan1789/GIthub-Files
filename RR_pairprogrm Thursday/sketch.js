/*
Driver: Raiyan
Typer: Eli
*/

var toppings = ["pineapple", "pizza", "mushroom","anchovies", "bell peppers", "jalapenos","extra cheese","triple cheese"];//array playlist



function setup(){
  createCanvas(1200,800);//creates canvas and its size
  background(25, 50, 70);
  
  
  
  for (i = 0; i < 8; i++){
  console.log(toppings[i]);
  stroke(50);
  fill(random(255), random(255), random(255));
  textSize(50);
  
  
  text(toppings[i], i * 100 + 50, i * 90 + 80);
  
  }
}


function draw(){
  var x = 0
  while (x<=width && x > 800)
  x = x + 20
  
  
}
