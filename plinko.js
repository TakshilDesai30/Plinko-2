class Plinko{
    constructor(x,y) {
        var options={
            isStatic:true
        }
        this.plinko=Bodies.circle(x,y,10,options);
        this.radius=10;
        World.add(world,this.plinko);
    }
    display() {
        var pos = this.plinko.position;
        push ();
        fill ("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop ();
    }
}