let engine=Matter.Engine.create()
let renderer = Matter.Render.create({
    element: document.getElementById("body"),
    engine: engine,
    options:{
        height:600,
        width:1000,
        wireframes:false
        
        
    }
   
})

let ground = Matter.Bodies.rectangle(650,550,200,20,{
    isStatic:true,
    render:{
        fillStyle:'blue'

    }
          
})
let birdies = Matter.Bodies.rectangle(300,100,20,20,{          
})

let composıte = Matter.Composites.pyramid(550,50,10,6,0,0, function(x,y){
    return Matter.Bodies.rectangle(x,y,20,20/*,{
        render:{
            sprite:{
                texture:'/asset/images/png';
            }
            
        }
    }*/)
})

let ballPos={
    x:150,
    y:450
}
let ball= Matter.Bodies.circle(ballPos.x,ballPos.y,20/*,{
    render:{
        sprite:{
            texture:'/asset/images/png';
        }
        
    }
}*/)

let sling= Matter.Constraint.create({
    pointA:{
      x: ballPos.x,
      y: ballPos.y
    },
    bodyB:ball,
    stiffness:0.5

    
})
let mouseConstraint=Matter.MouseConstraint.create(engine,{
    mouse:Matter.Mouse.create(renderer.canvas)
})
renderer.mouse=mouseConstraint
Matter.World.add(engine.world,[ground,composıte,ball,sling,mouseConstraint]);
let isFired=false
Matter.Events.on(mouseConstraint,'enddrag',function(event){
    if(event.body===ball){
        isFired=true;
    }
})
Matter.Events.on(engine,'afterUpdate',function(event){
    let distX=Math.abs(ballPos.x-ballPos.x)
    let distY=Math.abs(ballPos.y-ballPos.y)
    if(isFired&&distX<20&&distY<20){
        ball=Matter.Bodies.circle(ballPos.x,ballPos.y,20)
        sling.bodyB=ball
        Matter.World.add(engine.world,ball)
        isFired=false
    }
})
Matter.Render.run(renderer);
Matter.Runner.run(engine);