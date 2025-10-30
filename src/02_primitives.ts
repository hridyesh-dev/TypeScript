//primitives datatypes
let username: string = "Hridyesh";

let age: number = 20;

let isCreator : boolean = true

const big : bigint = 2n**63n-1n;

//we cant mix bigInt and number
// const mixed=big+age

const token:unique symbol = Symbol('TOKEN')

function yearsToDay(years:number):number{
    return years * 365
}

console.log(username.toUpperCase())
console.log(yearsToDay(2))