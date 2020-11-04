var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var options;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var options={
	//restitution:1
	'restitution':0.8,
	'friction':0.3,
	 'density':1.0
}





function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	

	

	helicopterSprite=createSprite(30, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=4
	helicopterSprite.depth=10;

	packageSprite=createSprite(helicopterSprite.x, helicopterSprite.y, 10,10,options)
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.velocityX=4
	packageSprite.depth=0;
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopterSprite.x , 200 , 5 ,options );
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

    
	Engine.run(engine);
  
	Matter.Body.setInertia(packageBody, Infinity)

}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  
  
if(keyDown("down")){
packageSprite.velocityY=packageSprite.velocityY+4


}
  drawSprites();
 
}





