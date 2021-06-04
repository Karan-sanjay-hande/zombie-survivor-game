const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var gameState="intro";

function preload() {

wall1_img= loadImage("images/wall.png");
chest_open_img= loadImage("images/chest2open.png")
chest_img= loadImage("images/Chest2.png");
bg_img= loadImage("images/loading screen3.jpg")
daybg= loadImage("images/playbg.png")
nightbg= loadImage("images/playbgnight.jpg")
//caveImg= loadImage(".png")
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    wall1=Bodies.rectangle(500,500,50,50)
    
    World.add(world,wall1)


}

function draw()
{ 
   Engine.update(engine);
   background(bg_img);
   if(gameState === "intro")
    {
        push()
       textSize(32);
       fill("purple")
       strokeWeight(3);
       stroke("purple")
       text("ZOMBIE SHOOTER",600,50);
        pop()
       textSize(25);
       fill("blue");
       strokeWeight(5);
       stroke("black")
       text("It is survival game , play and survive  \nA Doctor created a VIRUS and spread it into the  air \na person named jack was unaffected of the Virus \nNow its your job to help jack by finding a vacine for the virus \nyou will find the vacine at 10,000 points!! \n 1 zombie = 10 POINTS , controls usearrowkey  ",250,250); 

       textSize(30);
       fill("red");
       text("Press space to start the game!!", 500,500);
    } 

   if(gameState === "play")
    {   
         background(daybg) 
       
        //  text("play", 500,500);
         


    }     

}

function mouseDragged(){

}


function mouseReleased(){
    
}

function keyPressed(){
    if(keyCode=== 32 && gameState=== "intro")
       {
           gameState= "play";
       }
}
