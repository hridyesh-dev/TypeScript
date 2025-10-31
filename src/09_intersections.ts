// value must be everything FROM A and from B 

type Inter1 = {id:string};
type Inter2 = {createdAt:Date}

//it will have both values id and createdAt
type Entity = Inter1 & Inter2
const e:Entity={id:"e1",createdAt:new Date()}

//create two types one with username 
type name={username:string}
type email={userEmail:string}

type emp=name&email

const emp1:emp={
    username:"Hri",
    userEmail:"hri@google.com"
}

//intersection wont merge conflicting property types 
/*
    type NumberHolderUnique={a:number}
    type StringHolderUnique={a:string}
    // A ki dono type conflict karegi 
    type mixx= NumberHolderUnique & StringHolderUnique 

*/

//we can use intersection to add fields to existing object
type Product={id:string , title:string}
type Price={price:number}

type PricedProduct=Product & Price

