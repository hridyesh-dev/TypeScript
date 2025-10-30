"use strict";
//primitives datatypes
let username = "Hridyesh";
let age = 20;
let isCreator = true;
const big = 2n ** 63n - 1n;
//we cant mix bigInt and number
// const mixed=big+age
const token = Symbol('TOKEN');
function yearsToDay(years) {
    return years * 365;
}
console.log(username.toUpperCase());
console.log(yearsToDay(2));
