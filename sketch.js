var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,g1,g2,g3,opt
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	opt={
		isStatic: true
	  }
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	g1Sprite=createSprite(width/2, 655,100,10);
	g1Sprite.shapeColor=color("red")
	
	g2Sprite=createSprite(350,630,10,80);
	g2Sprite.shapeColor=color("red")

	g3Sprite=createSprite(450,630,10,80);
	g3Sprite.shapeColor=color("red")
	

	groundSprite=createSprite(width/2,height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 ,200 , 5 , {restitution:0.7, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground

	
	ground = Bodies.rectangle(width/2, 650, 6, 10 , {isStatic:true} );
 	World.add(world, ground);
	 g1 = Bodies.rectangle(width/2, 655, 6, 10 , {isStatic:true});
	 World.add(world, g1);

	 g2 = Bodies.rectangle(350,630, 10, 6 , {isStatic:true});
 	World.add(world, g2);
	
	 g3 = Bodies.rectangle(450,630, 10, 6 , {isStatic:true});
 	World.add(world, g3);
	
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
   keyPressed({setStatic:false})

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    packageSprite.x=packageBody.position.x
	packageSprite.y=packageBody.position.y
    
  }
}



