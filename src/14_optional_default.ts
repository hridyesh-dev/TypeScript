//optional and default parameters
function greetPersonOptional(name?:string):string{
    
    // if name is there then cool else return Guest
    const upperRes= name ? name?.toUpperCase():'Guest'
    return ` Hello ${upperRes}`
}


function greetPersonDefault(name:string="Ram"):string{
    // if name is there then cool else return Guest
    // no need of undefined check as it is taking from default value
    const upperRes = name 
    return ` Hello ${upperRes} `
}

console.log(greetPersonOptional('Hri'))
console.log(greetPersonOptional())

console.log(greetPersonDefault('Raj'))
console.log(greetPersonDefault()) 

function connect(port?:number,secure?:boolean,host:string="localhost"):void{
    const h=host
    const p=port??"80"
    const s=secure??false;
    console.log(` connected to ${h}:${p} and it is ${s} ` ) 
}

connect(3000,false);

