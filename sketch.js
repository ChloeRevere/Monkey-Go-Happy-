
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup, ground
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
monkey = createSprite(50,350,10,10)
foodGroup = new Group();
obstacleGroup = new Group();
monkey.addAnimation("running",monkey_running)
monkey.scale = 0.1
  
ground = createSprite(50,400,700,45)
  
}

function draw() {
background("lightblue")
monkey.collide(ground)
if (keyDown("space")){
monkey.velocityY = -12;}
monkey.velocityY = monkey.velocityY + 0.8
  
if (ground.x < 0){
ground.x = ground.width/2;
}
spawnFood();
spawnObstacles();
  
drawSprites();

}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
  
}
function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(800,359,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6
    
    obstacle.addImage(obstacleImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}




