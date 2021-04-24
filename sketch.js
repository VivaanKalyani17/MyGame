var gameState ="PLAY"
function preload(){

shark=loadAnimation("Shark1.gif","Shark2.gif","Shark3.gif","Shark4.gif")
shield=loadAnimation("Shield1 (1).gif","Shield1 (2).gif","Shield1 (3).gif","Shield1 (4).gif","Shield1 (5).gif")
fish=loadAnimation("Fish1.gif","Fish2.gif","Fish3.gif","Fish4.gif","Fish5.gif")
bg=loadAnimation("Back1.gif","Back2.gif","Back3.gif","Back4.gif")
jellyfish=loadAnimation("Jellyfish1.gif","Jellyfish2.gif","Jellyfish3.gif","Jellyfish4.gif","Jellyfish5.gif")
rock=loadImage("Rock.png")
seaUrchin=loadImage("Jellyfish.png")
gameOver=loadImage("GameOver.jpg")
}
function setup(){
createCanvas(1000,600)
  myBg = createSprite(500,300)
  myBg.addAnimation("bg",bg)
  myBg.scale=2.5
  myBg.velocityX=-3
  myFish=createSprite(200,500)
  myFish.scale=0.5
  myFish.addAnimation("Fish",fish)
sharkGroup=new Group()
jellyfishGroup=new Group()
over=createSprite(500,300)
over.addImage("N",gameOver)
over.visible=false
 
  

}function draw(){
  if (gameState=="PLAY"){
if(myBg.x<450){
myBg.x=myBg.width/2

}
if(keyDown("up")&&myFish.y>0){
myFish.y=myFish.y-2
}
if(keyDown("down")&&myFish.y<1000){
  myFish.y=myFish.y+2
  }
  if(keyDown("right")&&myFish.x<800){
    myFish.x=myFish.x+2
    }
    if(keyDown("left")&&myFish.x>0){
      myFish.x=myFish.x-2
      }
      if(keyDown("S")){
        spawnShield()
      }
      if(myFish.isTouching(sharkGroup)||myFish.isTouching(jellyfishGroup)){
        gameState="END"

      }
      
      spawnShark()
spawnJellyfish()}
else {
  myFish.visible=false
        jellyfishGroup.destroyEach()
        sharkGroup.destroyEach()
       
        myBg.velocityX=0
        over.visible=true
        over.scale=1.5
}
  drawSprites()

}function spawnJellyfish(){
if(frameCount%150===0){
  jelly=createSprite(800,random(0,600),10,10)
  jelly.velocityX=-8
jelly.addAnimation("jelly",jellyfish)
jelly.scale=0.3
jelly.lifetime=1000
jellyfishGroup.add(jelly)

}
}
// //function spawnShield(){
//   shields=createSprite(myFish.x,myFish.y,10,10)
//   shields.addAnimation("shields",shield)
//   shield.scale=0.5
//   shield.lifetime=10
// }
function spawnShark(){
  
  rand = Math.round(random(300,400))
  if(frameCount%rand==0){

myShark=createSprite(random(0,1000),random(0,600))
myShark.addAnimation("Sharks",shark)
myShark.velocityX=Math.round(random(0,6))
myShark.velocityY=Math.round(random(0,6))
myShark.lifetime=600
sharkGroup.add(myShark)
  }
}