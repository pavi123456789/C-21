var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100,100,50,50);
  car.shapeColor = "green";
  car.velocityX=6 ;

  wall = createSprite(1000,100,50,100);
  wall.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(car, wall)    
  
if(isTouching(movingRect,wall)){
  movingRect.shapeColor="blue";
}
  
 
  drawSprites();
}

