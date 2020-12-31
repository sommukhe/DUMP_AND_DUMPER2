
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, paperSprite, ground;
function preload()
{
dustbin = loadImage("sprites/dustinbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper = new Paper(100,400,50,50);
	ground = new Ground(200,500,2000,20)
	side1Sprite=createSprite(width/2 + 320, height-215, 110,10);
	side1Sprite.shapeColor = "red"
	side2Sprite=createSprite(width/2 + 260, height-240, 10,60);
	side2Sprite.addImage(dustbin)
	side3Sprite=createSprite(width/2 + 380, height-240, 10,60);
	side3Sprite.shapeColor = "red"
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  background(255,255,255);



  paper.display();
  ground.display();
  drawSprites();
 
}


function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:95,y:-95});
	}
}
