
var hider1;
var hider2, hider3, hider4, hider5;
var wall1, wall2, wall3;

function setup() {
  createCanvas(900,720);

  //MAZE
  edges = createEdgeSprites();
  
  wall1 = createSprite(70,150,10,100);
  wall1.shapeColor = color("black");

  wall2 = createSprite(250,150,70,10)
  wall2.shapeColor = color("black")

  wall3 = createSprite(120,150,10,100);
  wall3.shapeColor = color("black");
  
  // PC
  hider1 = createSprite(400, 200, 20, 20);
  hider1.shapeColor = color("orange");

  //NPC
  hider2 = createSprite(100, 200, 20, 20);
  hider2.shapeColor = color("blue");
  hider2.velocityX = 2;
  hider2.velocityY = 2;

  // hider3 = createSprite(200, 200, 50, 50);
  // hider4 = createSprite(500, 200, 50, 50);
  // hider5 = createSprite(600, 200, 50, 50);
}

function draw() {
  background("green");  

  if(keyDown("UP_ARROW")){
    hider1.y-= 4;
  }

  if(keyDown("DOWN_ARROW")){
    hider1.y+= 4;
  }

  if(keyDown("RIGHT_ARROW")){
    hider1.x+= 4;
  }

  if(keyDown("LEFT_ARROW")){
    hider1.x-= 4;
  }

  hider2.bounceOff(wall1);
  hider2.bounceOff(wall2);
  hider2.bounceOff(wall3);
  hider2.bounceOff(edges);

  drawSprites();

}
