var ship
var shipimage


function preload(){
shipimage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaimage= loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 sea=createSprite(200,200)
sea.addImage(seaimage)
sea.scale=0.3
sea.x = sea.width/8

ship=createSprite(80,220,70,80);
ship.addAnimation("shipmove",shipimage)
ship.scale=0.2

}


function draw() {
  background("blue");
 sea.velocityX=-3
 if(sea.x<0){
sea.x = sea.width/8

 }
  drawSprites();
}