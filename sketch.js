
var moving,fixed,wall;


function setup()
{
  createCanvas(800,400);
  fixed=createSprite(400, 200, 60, 100);
  moving=createSprite(600, 200, 100, 60);
  wall=createSprite(500,100,30,100);
  wall.shapeColor="green"
  fixed.shapeColor="green"
  moving.shapeColor="green"
}

function draw() {
  background(0); 
  moving.x=World.mouseX 
  moving.y=World.mouseY
  if(myistouching(moving,wall))
  {
    wall.shapeColor="red"
    moving.shapeColor="red"
  }
  else
  {
    wall.shapeColor="green"
    moving.shapeColor="green"
  }

  drawSprites();
}

