var bg,bgimg;
var bottomground;
var topground;
var balloon,balloonimg

function preload () {
  bgimg=loadImage("assets/bg.png")
  balloonimg=loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}
function setup () {
  createCanvas(windowWidth,windowHeight)
  bg=createSprite(width/2,height/2,windowWidth,windowHeight)
  bg.addImage(bgimg)
  bg.scale=1.3
  //creating top and bottom ground
  bottomground=createSprite(200,390,800,20)
  topground=createSprite(200,10,800,20)
  bottomground.visible=false
  topground.visible=false
  //creating balloon
  balloon=createSprite(100,290,30,30)
  balloon.addAnimation("ballon",balloonimg)
  balloon.scale=0.9

}
function draw () {
background("black")
//making the hot air balloon jump
if (keyDown("space")) {
 balloon.velocityY=-6
}
//creating gravity
balloon.velocityY=balloon.velocityY+2
  drawSprites();
}