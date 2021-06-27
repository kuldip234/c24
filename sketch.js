const Engine = Matter.Engine
const World = Matter.World
const Bodies= Matter.Bodies

var engine,world ,obj1
function setup() {
  
  createCanvas(800,400);

 
engine=Engine.create()
world=engine.world

box1=new Box(100,100,50,50)
box2=new Box(100,100,50,50)
box3=new Box(100,100,50,50)
box4=new Box(100,100,50,50)
box5=new Box(100,100,50,50)
ground1=new ground(0,390,800,10)
}

function draw() {
  background("blue");  
  Engine.update(engine)
  
box1 . display()
box2 . display()
box3 . display()
box4 . display()
box5 . display()
ground1 . display ()
}