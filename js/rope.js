class rope{
    constructor(bA , pB){ //pB ={x:23,y:45}
       var option={
        bodyA:bA,
        pointB:pB,
        stiffness:0.05,
        length:10
       } 
        
       this.chain=Constraint.create(option)
       this.POINTB = pB //this.POINTB.x --> pB.x
       World.add(world,this.chain)
    }

    fly(){

      this.chain.bodyA=null  
    }
    display(){
     strokeWeight(5)
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position
            line(pointA.x,pointA.y,this.POINTB.x,this.POINTB.y) 
        }  
    }
}