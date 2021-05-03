
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin1=loadImage("dustbin.png")
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1= new WALL(550, 460, 200,20);
	side2= new WALL(440, 420, 20,100);
	side3= new WALL(660, 420, 20,100);

	ground1=new GROUND(400,470,800,20)

	paper= new Ball(50,120,50)
	 
	Engine.run(engine);
  
}


function draw() {
  
  background("white");

  side1.display();
  side2.display();
  side3.display(); 

  paper.display();

  ground1.display();

  imageMode(CENTER)
  image(dustbin1,520,380,400,300)
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:580,y:965})
	}
}