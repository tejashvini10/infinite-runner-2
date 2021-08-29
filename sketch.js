var PLAY=1;
var knifeSwooshSound,gameOverSound;
var score=0;
var END=0;
var gameState=1;
var sword,swordImage;
var fruitGroup,enemyGroup,fruit1,fruit2,fruit3,fruit4;
var alien,alienImage1,alienImage2;
var fruitImage1,fruitImage2,fruitImage3,fruitImage4;
var gameover,gameoverImage;

function preload(){
 swordImage=loadImage("sword.png"); 
 alienImage1=loadImage("alien1.png");
   alienImage2=loadImage("alien2.png");
  fruitImage1=loadImage("fruit1.png");
  fruitImage2=loadImage("fruit2.png");
  fruitImage3=loadImage("fruit3.png");
  fruitImage4=loadImage("fruit4.png");
  gameoverImage=loadImage("gameover.png");
  knifeSwooshSound=loadSound("knifeSwooshSound.mp3");
  gameOverSound=loadSound("gameover.mp3");
  treeImage=loadImage("trees.jpg");
}

function setup(){
  createCanvas(1000,900)

  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  sword.setCollider("rectangle",0,0,40,40);
  score=0;
  
  fruitGroup=new Group();
  enemyGroup=new Group();
  
  
 
  
}
function draw(){
  background(treeImage);
  if(gameState===PLAY){
    Enemy();
     fruits(); 
camera.position.x=sword.x;
camera.position.y=sword.y;  
    sword.y=World.mouseY;
    sword.x=World.mouseX;
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
       knifeSwooshSound.play();
    }
    if(score==4)
  {
    fruit.velocityX=13;

  }
    if(score==10)
      {
        alien1.velocityX=-14;
      }
    else if(enemyGroup.isTouching(sword)) {
      gameState=END;
      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.velocityX=0;
       enemyGroup.velocityX=0;
      gameOverSound.play();
      sword.addImage(gameoverImage);
      sword.x=200;
      sword.y=200;
       sword.scale=0.7;
      
    }
    
  }
 drawSprites();
 stroke("red");
  textSize(25);
  fill("red");
   text("Score: "+ score, 500,50);
   
}
function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(40,200,20,20);
    position=Math.round(random(1,2));
      if(position==1) 
     {
       fruit.x=400;
       fruit.velocityX=-(7+(score/4));
     }
    else
    {
      if(position==2)
        {
          fruit.x=0;
           fruit.velocityX=(7+(score/4));
        }
    }
    fruit.scale=0.2;
    r=Math.round(random(1,4));
     if(r==1){
       fruit.addImage(fruitImage1);
     }
    else if(r==2){
      fruit.addImage(fruitImage2);
    }
   else if(r==3){
      fruit.addImage(fruitImage3);
  }
  else if(r==4){
      fruit.addImage(fruitImage4);
  }
   fruit.y=Math.round(random(50,340));
        fruit.velocityX=7;
  fruit.setlifetime=100;
  fruitGroup.add(fruit); 
    
    
}
}
 function Enemy(){
   if(World.frameCount%200===0){
     alien1=createSprite(400,200,20,20);
     alien1.addAnimation("moving",alienImage1);
     alien1.y=Math.round(random(100,300));
     alien1.velocityX=-(8+score/10);
     alien1.velocityX=-8;
     alien1.setlifetime=50;
     
     enemyGroup.add(alien1);
   }
    if(World.frameCount%200===0){
     alien2=createSprite(400,200,20,20);
     alien2.addAnimation("moving",alienImage2);
     alien2.y=Math.round(random(100,300));
      alien2.velocityX=-(8+score/10);
     alien2.velocityX=-11;
     alien2.setlifetime=80;
     
     enemyGroup.add(alien2); 
 }
 }

  
