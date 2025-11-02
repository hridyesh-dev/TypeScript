// interfaces vs Types 
/*
    interface is best for object shapes that we expect to 
    extend it supports declaration margin 

    if i declare some interface and then I can redlare it with same name 

    types can be more general can be used for objects, unions and intersections , functions etc 
    this can not be reopened no margin 


*/

interface Box1{
    width:number;
}

interface Box1{
    length:number 
}

// this does not have any error which means we can redeclare it with mre properties
const boxDemo:Box1={
    width:10,
    length:20
}

type Bag={size:number}
// cant redeclare type alias name
//type Bag={color:string}

// also can use types for unions and intersections 


// but in case if we want to extend something we need to use interfaces we can't do it with types