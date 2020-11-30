var fixedRec, movingRec

function setup() {
  createCanvas(1200,800);
  fixedRec=createSprite(600, 400, 50, 80);
  fixedRec.shapeColor="green";
  fixedRec.debug=true;
  movingRec=createSprite(400,200,80,30);
  movingRec.shapeColor="green";
  movingRec.debug=true;

}

function draw() {
  background(0);  
  movingRec.x=World.mouseX;
  movingRec.y=World.mouseY;
  if(movingRec.x-fixedRec.x    < fixedRec.width/2    +   movingRec.width/2
    && fixedRec.x-movingRec.x  < fixedRec.width/2   +   movingRec.width/2
    && movingRec.y-fixedRec.y   < fixedRec.height/2   +   movingRec.height/2
    && fixedRec.y-movingRec.y    <    fixedRec.height/2   + movingRec.height/2){
    movingRec.shapeColor="red";
    fixedRec.shapeColor="red";
  }
  else{
    movingRec.shapeColor="green";
    fixedRec.shapeColor="green";
  }
  drawSprites();
}