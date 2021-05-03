class   Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body=Bodies.circle(x,y,r,options)
        this.r=r
        this.paperimage=loadImage("paper.png")
        World.add(world,this.body)
    }

    display(){
        var paperpos=this.body.position;

        push()
        imageMode(RADIUS)
        strokeWeight(3)
        fill(255,0,255)
        image(this.paperimage,paperpos.x,paperpos.y,this.r,this.r)
        pop()
    }
}