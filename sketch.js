
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
monkey.scale =  0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
}


function draw() {
background("white");
   ground.x = ground.width/2;
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
   }
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  survivalTime = survivalTime + Math.round(getFrameRate()/60);
  if(World.frameCount%100===0){
  fruits();
  }
  if(World.frameCount%200===0){
  stones();
  }
  
   
  
  
  
  drawSprites();
  
  fill("black");
   text("Survival Time:" + survivalTime,200,50)
}
function fruits(){
  banana = createSprite(400,Math.round(random(160,250),10,10))
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 150;
  FoodGroup.add(banana);
}

function stones(){
  obstacle = createSprite(400,330,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1
  obstacle.velocityX = -4
  obstacleGroup.add(obstacle);
}




