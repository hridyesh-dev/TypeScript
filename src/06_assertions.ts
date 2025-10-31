const raw='{ "id":1,"name":"A"}'

//json string ko json mai convert krr raha hai 
//this is type assertion im telling ts that i know what type this is 
const riskyUser=JSON.parse(raw) as {id:number;name:string}
console.log(riskyUser.name);

//safe process 
type USER22 ={id:number,name:string};

//extra checks we wont be getting any errors 
function isUser(v:unknown):v is USER22{
    /*
        if v is an object it is not null
        if id is present it will be a number 
        if name is string as it is string
    */
    return(
        typeof v==='object'&& v !== null && 
        "id" in v && typeof(v as any).id==="number"
        && "name" in v && typeof(v as any).name==="string"
    )
}

// here it is not blindly trusting but checking 
const maybe=JSON.parse(raw) as unknown;
if (isUser(maybe)){
    console.log(maybe.name); //safe
}
