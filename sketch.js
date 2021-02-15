const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, Slingshot;
var ground1;
var engine, world;

function preload() {
    polygon_img = loadImage("polygon.png");
}
function setup(){
    var canvas = createCanvas(400,800);
    ground1 = new Ground(400,800,400,20);
    ground2 = new Ground(150,600,50,10);
    ground3 = new Ground(250,400,50,10);

    box1 = new Box(115,590,10,30);
    box2 = new Box(125,590,10,30);
    box3 = new Box(135,590,10,30);
    box4 = new Box(145,590,10,30);
    box5 = new Box(155,590,10,30);
    box6 = new Box(165,590,10,30);
    box7 = new Box(175,590,10,30);
    box8 = new Box(125,560,10,30);
    box9 = new Box(135,560,10,30);
    box10 = new Box(145,560,10,30);
    box11 = new Box(155,560,10,30);
    box12 = new Box(165,560,10,30);
    box13 = new Box(135,530,10,30);
    box14 = new Box(145,530,10,30);
    box15 = new Box(155,530,10,30);
    box16 = new Box(145,500,10,30);
    box17 = new Box(200,400,20,30);
    box18 = new Box(220,400,20,30);
    box19 = new Box(240,400,20,30);
    box20 = new Box(260,400,20,30);
    box21 = new Box(280,400,20,30);
    box22 = new Box(300,400,20,30);

    polygon = Bodies.circle(50,200,20);
    World,add(world,polygon);

    slingshot = new Slingshot(this.polygon,{x:100,y:200})

    

}

function draw{
    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    slingshot.display();
    
    text = ("Drag Hexgonal Stone and release it to launch it towards the blocks:",200,10);

    imageMode(CENTER);
    image(polygon_img,polygon.poition.x,polygon.position.y,40,40);
    

}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}