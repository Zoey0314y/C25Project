class Paper{
    constructor(x,y,radius){
    
    var options =  {
        isStatic : false,
        restitution : 0.1,
        friction : 0,
        density : 0.2 
        
    }
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    World.add(world,this.body);
  
  
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    imageMode(RADIUS);
    stroke ("purple");
    strokeWeight(20);
    fill("white");
    image(this.image,0,0,this.radius,this.radius);
    pop();
    
    }
  }