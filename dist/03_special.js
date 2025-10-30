"use strict";
// when we are going to use special types
// let title:string="intro"
// title=undefined
//unioun type
//it can be string or undefined
let subtitle = undefined;
subtitle = "Hridyesh";
//dont use any for callbacks jinki value nahi deni
// use void when function will not return any value
function greet(msg) {
    console.log(msg);
}
//when function never returns any value
function fail(msg) {
    throw new Error(msg); //this function will never return any value
}
//DONOT use ANY TYPE , TRY TO IGNORE AS MUCH AS POSSIBLE
/*
    const valueAny:any=JSON.parse('{"x":2}')
    valueAny.notThere.toFixed(2)
*/ 
