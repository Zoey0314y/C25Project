
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,dustbin;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="yellow";

	/*dustbinposition = width/2 + 100;
	dustbinY = 600;

	leftSprite=createSprite(dustbinposition,dustbinY,20,100);
	leftSprite.shapeColor = "white";
	leftbody = Bodies.rectangle(dustbinposition + 20,dustbinY,20,100,{isStatic : true});
	World.add(world,leftbody);
	
	rightSprite=createSprite(dustbinposition + 200,dustbinY,20,100);
	rightSprite.shapeColor = "white";
	rightbody = Bodies.rectangle(dustbinposition + 200 - 20,dustbinY,20,100,{isStatic : true});
	World.add(world,rightbody);
	
	bottomSprite=createSprite(dustbinposition + 100,dustbinY + 40,200,20);
	bottomSprite.shapeColor = "white";
	bottombody = Bodies.rectangle(dustbinposition + 100,dustbinY + 45 - 20,200,20,{isStatic : true});
	World.add(world,bottombody);*/


	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic : true} );
	World.add(world, ground);

	paper = new Paper(150,220,70);
	dustbin = new Dustbin(630,600,120,120);
	
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  paper.display();
  dustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
	}

}
