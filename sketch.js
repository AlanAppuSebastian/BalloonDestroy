var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backGround,backgroundImg;

var balloonRed,balloonredImg;
var balloonGreen,balloongreenImg,greenballsGroup;
var balloonBlue,balloonblueImg,blueballsGroup;
var balloonYellow,balloonyellowImg,yellowballsGroup;
var redballsGroup;

var bow,bowImg;
var arrow,arrowImg,arrowGroup;
var score = 0;


function preload(){
 //load your images here
  backgroundImg = loadImage("background0.png");
  balloonredImg = loadImage("red_balloon0.png");
  balloongreenImg = loadImage("green_balloon0.png");
  balloonblueImg = loadImage("blue_balloon0.png");
  balloonyellowImg = loadImage("pink_balloon0.png");
  bowImg = loadImage("bow0.png");
  arrowImg = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 500);
  
    backGround = createSprite(0,0,20,20); 
    backGround.addImage("background",backgroundImg);
    backGround.scale = 2.5;
    backGround.x = backGround.width /100;
    backGround.velocityX = -5;
  
  
    bow = createSprite(500,280,20,20);
    bow.addImage ("bow",bowImg);
 
    var rand =  Math.round(random(1,100))
    console.log(rand)
    score = score+1;
   
    arrowGroup   = new Group();
    redballsGroup = new Group();
    blueballsGroup = new Group();
    greenballsGroup = new Group();
    yellowballsGroup = new Group();

}


function draw() {
  
 
  //add code here
  
  if (keyDown("space")) {
  createarrow();
  
  }
   
  
  if (backGround.x < 100){          
    backGround.x = backGround.width/2;
  }
  
  if (arrowGroup.isTouching(redballsGroup)){
      redballsGroup.destroyEach();
      arrowGroup.destroyEach();
      score =score + 1;
     
     }
  if (arrowGroup.isTouching(blueballsGroup)){
      blueballsGroup.destroyEach();
      arrowGroup.destroyEach();
      score =score + 1;
     
     }
  
  if (arrowGroup.isTouching(greenballsGroup)){
      greenballsGroup.destroyEach();
      arrowGroup.destroyEach();
      score =score + 1;
     
     }
  if (arrowGroup.isTouching(yellowballsGroup)){
      yellowballsGroup.destroyEach();
      arrowGroup.destroyEach();
      score =score + 1;
     
     }
  
 
  if(gameState === PLAY){
 
  }
  
   drawSprites();
   bow.y = World.mouseY;
  
   spawnballoonred();
   spawnballoonblue(); 
   spawnballoongreen();
   spawnballoonyellow();
  
    
  text("SCORE :"+ score,200,50); 
 
  text("Creator Alan Sebastian",200,100);
 
  
  
  
  
  
  
}


function createarrow (){
arrow = createSprite(500,280,20,25);  
arrow.addImage ("arrow",arrowImg);
arrow.scale = 0.3;
arrow.velocityX = - 10;
arrow.y = bow.y;
arrowGroup.add(arrow);

  }

function spawnballoonred(){
if(frameCount  % 30 === 0){
balloonred = createSprite(50,150,20,10);
balloonred.y = Math.round(random(10,400)); 
balloonred.addImage("redballoon",balloonredImg);
balloonred.scale = 0.1;
balloonred.velocityX = 5;
redballsGroup.add(balloonred);
}
}

function spawnballoonblue(){
if(frameCount  % 30 === 0){
balloonblue = createSprite(150,210,20,10);
balloonblue.y = Math.round(random(10,600)); 
balloonblue.addImage("blueballoon",balloonblueImg);
balloonblue.scale = 0.1;
balloonblue.velocityX = 2;
balloonblue.lifetime = 150;
blueballsGroup.add(balloonblue);
}
}



function spawnballoongreen(){
if(frameCount  % 50 === 0){
balloongreen = createSprite(100,180,20,10);
balloongreen.y = Math.round(random(10,400)); 
balloongreen.addImage("greenballoon",balloongreenImg);
balloongreen.scale = 0.1;
balloongreen.velocityX = 5;
balloongreen.lifetime = 150;
greenballsGroup.add(balloongreen);
}
}  


  
function spawnballoonyellow(){
if(frameCount  % 40 === 0){
balloonyellow = createSprite(200,250,20,10);
balloonyellow.y = Math.round(random(10,400)); 
balloonyellow.addImage("yellowballoon",balloonyellowImg);
balloonyellow.scale = 1.3;
balloonyellow.velocityX = 5;
balloonyellow.lifetime = 200;
yellowballsGroup.add(balloonyellow);
}
}  
  
  
  
  

