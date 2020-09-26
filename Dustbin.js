class Dustbin{
    constructor(x,y,width,height){
    
    var options =  {
        isStatic : false
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = loadImage("dustbingreen.png");
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);
  
  
    }
    display(){
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    
    imageMode(CENTER);
    stroke ("purple");
    strokeWeight(20);
    fill("white");
    image(this.image,0,0,this.width,this.height);
    pop();
    
    }
  }