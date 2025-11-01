//plain functions
function func1(a:number,b:number):number{
    return a + b ; 
}

const nums12=[1,2,3]
const doubled= nums12.map((n)=>n*2)
console.log(doubled)

const times2=( n:number )=>n*2 // always give annotations 

//how we are going to anotate object parameters
type Point={x:number,y:number}
function distanceFromOrigin(p:Point):number{
    return Math.hypot(p.x,p.y);
} 
//
console.log(distanceFromOrigin({x:2,y:3}))
