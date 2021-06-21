const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var snow1,snow2;



function setup() {
  createCanvas(1260,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //snow1.shapeColor = "red";
  snow1 = new Snow(300, 400, 50, 50);
}

function preload() {
  bgImg = loadImage("snow2.jpg");
}

function draw() {
  background(bgImg);
  snow1.addImage("snow", snow1);
  snow1.display();
  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    snow1.velocityY = 2;
  }
}