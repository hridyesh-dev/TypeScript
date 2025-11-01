/*

when we are using types : 

object shapes: similar to interfaces
union types ( A | B )
intersection types (A & B)

type is more general than interfaces

*/

type Person1={
    id:string;
    address:string;
    salary:number
}

const p1:Person1={
    id:"1",
    address:"address",
    salary:1234
}

// Union type alias : Interfaces cant use this 
type Status="new" | "pending" | "paid"

function nextActionCheck(s:Status):string{
    switch(s){
        case 'new':
            return 'new user'
            break;
        case 'paid':
            return 'user paid'
            break;
        default:
            return 'user pending'
            break;
    }
}

type toMerge1={price:number}
type toMerge2={stock:number}

//will have personInfo , price and stock 
type MergedProductInfo=Person1&toMerge1&toMerge2