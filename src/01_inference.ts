// goal -> understand when to let ts infer types
//ts ko apne aap types pata chal jaati hai 
// ts ko js aati hai 

// ts knows it is a number
let count=0;

//ts sees the exact literal value
const site="acedevhub"

const scores=[10,20,30]

//over annotation is not bad but its like too much 

//we should anotate function parameters
export function add(a:number,b:number):number{
    return a+b
}
// console.log(add("5",2))
console.log(add(5,2))

//anotate when type is not obvious

let maybe:string|number;

maybe=Math.random()>0.5?"test":10 ;