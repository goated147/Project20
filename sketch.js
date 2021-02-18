var car,wall;
var speed,weight,height;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  car= createSprite(50,200,50,50);
  wall= createSprite(1200, 200, 60,height/2);
  wall.shapeColor=(80,80,80)



}

function draw() {
  background(255,255,255); 

   
   
  if(car.isTouching(wall)){
    car.shapeColor="red";
    car.velocityX=0;
  }
else {car.shapeColor="blue"
}
  car.velocityX=speed; 
  drawSprites();
}