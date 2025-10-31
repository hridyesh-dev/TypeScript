"use strict";
const raw = '{ "id":1,"name":"A"}';
//json string ko json mai convert krr raha hai 
//this is type assertion im telling ts that i know what type this is 
const riskyUser = JSON.parse(raw);
console.log(riskyUser.name);
//extra checks we wont be getting any errors 
function isUser(v) {
    /*
        if v is an object it is not null
        if id is present it will be a number
        if name is string as it is string
    */
    return (typeof v === 'object' && v !== null &&
        "id" in v && typeof v.id === "number"
        && "name" in v && typeof v.name === "string");
}
// here it is not blindly trusting but checking 
const maybe = JSON.parse(raw);
if (isUser(maybe)) {
    console.log(maybe.name); //safe
}
