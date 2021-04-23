var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var gameState="PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
 

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  Engine.update(engine);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, 60, 50)

  textSize(20)
  text("500",20,530)
  text("500",100,530)
  text("500",180,530)
  text("500",260,530)
  text("100",340,530)
  text("100",420,530)
  text("100",500,530)
  text("200",580,530)
  text("200",660,530)
  text("200",740,530)
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
   }
  for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   if (turn===5) {
     gameState="OVER"
     textSize(50)
     text("GAMEOVER",250,440)
   }
  
   if (this.particles.body.x<300 && this.particles.body.y>530) {
     score+500
   } 
   
   if (this.particles.body.x>301 && this.particles.body.x<600 && this.particles.body.y>530) {
    score+200
  } 
  
  if (this.particles.body.x>601 && this.particles.body.y>530) {
    score+100
  } 
}

// function mousePressed() {
//   if (gameState!=="OVER") {
//     turn++
//     particle=new Particle(mouse.x,10,10,10)
//   }
// }