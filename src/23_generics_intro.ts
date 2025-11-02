//understanding what is "type parameter <T> "
// how typescript inferes this from our arguments 

//what is generics : it is a function where the types and blanks and we fill it later
//<T> is a placeholder and ts inferes what is <T> based on the arguments we are passing 

// we will return what we will pass 
//typescript inferes T if(5)--> t is a number 
//if('srtring')->t is string
function id<T>(x:T):T{
    return x;
}

const xyzz=id(5)
console.log(xyzz+1,id("Hridyesh"))

//function that will return types derived from the input
function firstGen<T>(arr:T[]):T|undefined{
    return arr[0]
}

console.log(firstGen([1,2,3,4]))

//how we can preserve precise type from generics 
//whithout generics (x:unknown)=>unknown
//whithout generics (x:T)=>T exact type will be kept and will be infered
function wrap<T>(value:T):{value:T}{
    return {value}
}



