const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ground, pentagon,slingshot;


function preload() {

}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400,200,800,50)
    block1 = new Box(330,235,30,40)
    block2 = new Box(360,235,30,40)
    block3 = new Box(390,235,30,40)
    block4 = new Box(420,235,30,40)
    block5 = new Box(450,235,30,40)
    block6 = new Box(360,195,30,40)
    block7 = new Box(390,195,30,40)
    block8 = new Box(420,195,30,40)
    block9 = new Box(390,155,30,40)

    pentagon = Bodies.circle(50,200,50)
    World.add(world,pentagon)
    slingshot=new SlingShot(this.pentagon,{x:100,y:200})
}

function draw(){
Engine.update(engine)


ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
}



    function mouseDragged()
{
     Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
     }
      function mouseReleased()
      { 
          slingshot.fly(); 
    } 