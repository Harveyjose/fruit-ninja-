var sword,alien;

PLAY = 1;
END = 0;

var gameState = PLAY;

var fruit;

var sword_Image,fruit_Image1,fruit_Image2,fruit_Image3,fruit_Image4,alien_Image,gameOverImage;

var score ;

function preload(){
  sword_Image = loadImage("sword.png");
  fruit_Image1 = loadImage("fruit1.png");
  fruit_Image2 = loadImage("fruit2.png");
  fruit_Image3 = loadImage("fruit3.png");
  fruit_Image4 = loadImage("fruit4.png");
  alien_Image = loadImage("alien1.png");
  gameOverImage = loadImage("gameover.png");
  
}

function setup(){
  createCanvas(590,400);
  sword = createSprite(200,150,1,1);
  sword.addImage(sword_Image);
  sword.scale = 0.5;
  score = 0;
  fruitGroup = createGroup();
  enemyGroup = createGroup();
}

function draw(){
  background("white")
   text("score = " + score,200,100)
          if(gameState === PLAY){
          sword.y = World.mouseY
          sword.x = World.mouseX
          if(sword.isTouching(fruitGroup)){
             fruit.destroy();
             score = score + 2;
         }
          if(sword.isTouching(enemyGroup)){
            alien.destroy();
            sword.addImage(gameOverImage);
            gameState = END;
          }
          }
           else if(gameState === END){
              fruitGroup.destroyEach();
              enemyGroup.destroyEach();
              fruitGroup.setVelocityXEach(0);
              enemyGroup.setVelocityXEach(0);
           }
             
  drawSprites();
  fruits();
  enemy();
}
function enemy(){
    if(frameCount % 200 === 0){
      alien = createSprite(400,200,20,20);
      alien.addImage(alien_Image);
      alien.y = Math.round(random(100,300));
      alien.velocityX = -8;
      alien.setlifetime = 50; 
      enemyGroup.add(alien);
  }
}
function fruits (){
  if(frameCount % 60 === 0 ){
    rand = Math.round(random(1,4));
    fruit = createSprite (400,200,20,20)
    fruit.scale = 0.3
    if (rand == 1){
        fruit.addImage(fruit_Image1)
        }
    else if (rand == 2){
      fruit.addImage(fruit_Image2)
    }
     else if (rand == 3){
      fruit.addImage(fruit_Image3)
    }
     else if (rand == 4){
      fruit.addImage(fruit_Image4)
    }
        
      fruit.y = Math.round(random(50,340))
    
      fruit.velocityX = -7;
      
      fruit.setLifetime = 100;
      fruitGroup.add(fruit);
  }
}