class Bob {
  constructor(x,y,redius){
    var options = {
      isStatic:false,
      restitution: 1,
      friction:0,
      dessity:0.8
    }
    
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius
    
    World.add(world, thid.body);
    )
    display(){
      
      ellipsMode(RADIUS);
      
      fill("magenta");
      
      circle(this,body.position.x,this.body.position.y,this.radius);
    }
  };
