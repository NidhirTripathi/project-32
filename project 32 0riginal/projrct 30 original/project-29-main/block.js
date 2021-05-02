class Block {
  constructor(x, y, width, height) {
    var options = {
      
        'restitution':0.8,
        'friction':0.3,
        'density':0.5,
        isStatic: false
        
    }
    this.visiblity=255

   this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<8){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("yellow");
    rect(0, 0, this.width, this.height);
    pop();

    }
    else {
      World.remove(world,this.body)
      push()
this.visiblity=this.visiblity-5



      pop()
    }
  }
  score(){
    if (this.visiblity<0&&this.visiblity>-105){

      score=score+1
  }}
  
}