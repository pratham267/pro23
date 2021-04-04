class box{
    constructor(x,y,width,height){
        var options={
            'restitution':1
        }
        this.body=bodies.rectangle(x,y,width,height,options);

        World.add(World,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}