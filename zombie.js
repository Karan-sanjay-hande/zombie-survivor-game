class zombie extends BaseClass{
    constructor(x, y) {
       super(x,y,50,50)  
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("images/zombie.gif");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}