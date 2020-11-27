const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var divisions=[];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var turn=0;
var gameState="start";
var paRticle;

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
  Engine.update(engine);
 
  background("black");
  ground.display();

  noStroke();
  textSize(30);
  fill("white");
  text("500",15,530);
  text("500",90,530);
  text("500",170,530);
  text("500",250,530);
  text("100",330,530);
  text("100",410,530);
  text("100",490,530);
  text("200",570,530);
  text("200",650,530);
  text("200",730,530);

  textSize(20)
 text("Score : "+score,20,30);
  
 if ( gameState =="end") {
    
  textSize(100);
  text("GameOver", 150, 250);
  //return
}
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   //if(frameCount%60===0){
  // particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    // score++;
  // }
 
  //for (var j = 0; j < particles.length; j++) {
   
 // particles[j].display();
 // }
   
   if(paRticle!=null){
     paRticle.display();

     if(paRticle.body.position.y>760){
       if(paRticle.body.position.x<360){
         score=score+500;
        paRticle=null;
        if(turn>=5) gameState="end";
       }
       else if (paRticle.body.position.x < 600 && paRticle.body.position.x > 301 ) 
       {
             score = score + 100;
             paRticle=null;
             if ( turn>= 5) gameState ="end";

       }
       else if (paRticle.body.position.x < 900 && paRticle.body.position.x > 601 )
       {
             score = score + 200;
             paRticle=null;
             if ( turn>= 5)  gameState ="end";

       }      
     }
    }
  
     for (var k = 0; k < divisions.length; k++) {
     
      divisions[k].display();
    }
   

}
function mousePressed(){
  if (gameState !=="end"){
    turn++;
    paRticle=new Particle(mouseX,10,10,10);
  }
}