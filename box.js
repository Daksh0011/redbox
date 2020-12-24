class box{
    constructor(x,y,height,width)
    
    
    {
        this.body=Bodies.rectangle(250,300,20,60)
        World.add(world,this.body)
    }
display()
{
    rect(this.body.position.x,this.body.position.y,90,20)
}
}