// <T> constant this T so that only certain shapes are allowed
//<T extends X>
// key constants: <K extends key of T> -> K must be a key of t 
// T can be anything but be dont want that because this can break

//yeh voh arguments le ga jiski value mai length property hogi 
function lenN4<T extends {length:number} >(xN4:T):number{
    return xN4.length
}

console.log(lenN4('hello'))
console.log(lenN4([1,2,3]))
console.log(lenN4({length:10,tag:'ok'}))
// console.log(lenN4(123)) : Number dosent have length 
