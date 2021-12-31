
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof (425,300,250,20);
	bobObject1 = (340,470,20)
        bobObject1 = (380,470,20)
	bobObject1 = (420,470,20)
	bobObject1 = (460,470,20)
	bobObject1 = (500,470,20)
	rope1= new Rope(bobObject1.body,roof.body,-40*2, 0);
	rope2= new Rope(bobObject2.body,roof.body,-20*2, 0);
	rope3= new Rope(bobObject3.body,roof.body,-0*2, 0);
	rope4= new Rope(bobObject4.body,roof.body,20*2, 0);
	rope5= new Rope(bobObject5.body,roof.body,40*2, 0);
	
	
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display()
rope1.diplay();	
rope2.diplay();	
rope3.diplay();		
rope4.diplay();		
rope5.diplay();		
bobObject1.display();
bobObject2.display();	
bobObject3.display();	
bobObject4.display();	
bobObject5.display();	
	
	
	
	
  drawSprites();
 
}
function drawline (constraint){
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
roofBodyOffset = constraint.pointB;
roofBodyX= roofBodyPosition.x + roofBodyOffset.x;	
roofBodyY= roofBodyPosition.y + roofBodyOffset.y;	
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
	
}	
	
function keyPressed(){
	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});	
	}
}	

