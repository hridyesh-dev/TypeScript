//what are interfaces - important
// interface-a named shape for objects 

//how interface is different from types

interface User333{
    id:string;
    name:string;
    emial?:string;
    readonly createdAt:Date;//this cant be reassigned
}

const user333:User333={
    id:"1",
    name:"Hridyesh",
    createdAt:new Date(),
    emial:"xyz@gmail.com"
}

//extending Inheritance
interface Admin333 extends User333{
    permissions:string[]
}

//Single Inheritance
const admin333:Admin333={
    id:"1",
    name:"Hridyesh as admin",
    createdAt:new Date(),
    permissions:["createUser","deleteUser"]
}

interface withMeta1{
    meta:{active:boolean}
}

//multipleInheritance
interface AdminWithMeta extends Admin333, withMeta1{}

//implementing multiple inheritance
const adminwithMeta333:AdminWithMeta={
    id:"1",
    name:"Hridyesh as admin",
    createdAt:new Date(),
    permissions:["createUser","deleteUser"],
    meta:{
        active:true
    }
}

// it is great for modelling shapes that may be extended 





