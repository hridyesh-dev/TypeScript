/*
    how to model object property , how to use 
    required,optional,readonly properties
*/
//email?:string-> email is not required but if it is present it is string


type User={
    //this is a required property
    id : string 
    name : string
    //user can have email or cant this is an optional property
    email? : string
    // this is a readonly property this cant be reassigned
    readonly createdAt:Date
}

//this user1 is of User type
const user1:User={
    id:"u1",
    name:"Ram",
    createdAt:new Date()
}
const user2:User={
    id:"u2",
    name:"Hanuman",
    email:"hanuman@ram.com",
    createdAt:new Date()
}

//Cannot assign to 'createdAt' because it is a read-only property.
// user1.createdAt=new Date()

//it can be absent here
type User2={email?:string}

//here it should be present either undefined or string it cant be absent
type User3={email:string|undefined}
//46:42