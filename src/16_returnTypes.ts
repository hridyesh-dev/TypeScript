// return types of functions

//inference example
const doubleFunc=(n:number)=>n*2;

//explicit return for exported/public functions
export function toTitle(s:string):string{
    return `Hello ${s}`
}

// the parameter we are giving is different as to return type
function booleanToNumber(falg:boolean):number{
    if(falg){
        return 1;
    }else{
        return 0;
    }
}

//some async functions are infered automatically
async function loadCountInfered(){
    return 42;
}

loadCountInfered().then(n=>console.log(n))
