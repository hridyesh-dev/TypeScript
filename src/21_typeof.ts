// 
function describeTypeOf(x:unknown){
    if(typeof x==='string'){
        return "string"
    }
    else if(typeof x==='number'){
        return "Number"
    }
    else if(typeof x==='boolean'){
        return true
    }
    else if(typeof x==='bigint'){
        return "bigint"
    }
    else if(typeof x==='symbol'){
        return "symbol"
    }
    else if(typeof x==='undefined'){
        return "Undefined"
    }
    else if(typeof x==='function'){
        return "function"
    }
    
    //typeof null is object
    else if(x===null)return null

    else if(typeof x==='object'){
        return "Object"
    }
}

//TYPE OF FOR PRIMITIVES
console.log(

    //string
    describeTypeOf('hi'),
    
    //number
    describeTypeOf(23), 
    
    //bolean
    describeTypeOf(true),
    
    //bigInt
    describeTypeOf(10n) , 
    
    //Symbol
    describeTypeOf(Symbol('Hri')),
    
    //undefined
    describeTypeOf(undefined),
    
    //Function
    describeTypeOf(()=>{}),
    
    //null
    describeTypeOf(null),
    
    //Object
    describeTypeOf({})
)

function info(z:unknown){
    
    if(Array.isArray(z)){
        return z;
    }
    
    if(z instanceof Date){
        return new Date()
    }
    
    if(z instanceof Error){
        return new Error('xyz')
    }
    else{
        return ('other TYPES')
    }
}

//TYPE OF FOR NON PRIMITIVES
console.log(
    info([1,2,3,4,5]),
    info(new Date()),
    info(new Error('oppss! error occurred')),
    info({x:1})
)