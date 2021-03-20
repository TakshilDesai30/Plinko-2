const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var divisions = [];
var plinkos = [];
var particle;
var count;
count=0;
var gamestate;
gamestate="PLAY";
var score;
score=0;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,790);

  for(var d=0; d<=width; d=d+80) {
    divisions.push(new Division(d,650,10,300));
  }
  for(var p=45;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,75));
  }
  for(var p=20;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,175));    
  }
  for(var p=45;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,275));
  }
  for(var p=20;p<=width;p=p+50) {
    plinkos.push(new Plinko(p,375));
  }
  Engine.run(engine);
}

function draw() {
  background(0);  
  ground.display();

  textSize(35);
  fill("white");
  text("500",10,550);
  text("500",90,550);
  text("500",170,550);
  text("500",250,550);
  text("100",330,550);
  text("100",410,550);
  text("100",490,550);
  text("200",570,550);
  text("200",650,550);
  text("200",730,550);
  text("Score: "+score,20,40);

  if (gamestate==="END") {
    textFont("Candara");
    textSize(100);
    text("Game Over",150,250);
    textSize(50);
    text("Press r to replay.",220,330);
  }
  for (var m =0;m<divisions.length;m++) {
    divisions[m].display();
  }
  for (var n = 0; n<plinkos.length;n++) {
    plinkos[n].display();
  } 
  if (particle!=null) {
    particle.display();
    if (particle.body.position.y>760) {
      if (particle.body.position.x<300) {
        score=score+500;
        particle=null;
        if (count>=5) gamestate="END";
      }  
      else if (particle.body.position.x>301 && particle.body.position.x<600) {
        score=score+100;
        particle=null;
        if (count>=5) gamestate="END";
      }   
      else if (particle.body.position.x>601 && particle.body.position.x<800) {
        score=score+200;
        particle=null;
        if (count>=5) gamestate="END";
      }    
    }
  }
}
function keyPressed() {
  if (keyCode===DOWN_ARROW && gamestate==="PLAY") {
    particle=new Particle(random(100,700),0);
    count++;
  }
  if (keyCode===82 && gamestate==="END") {
    gamestate="PLAY";
    score=0;
    count=0;
  } 
}