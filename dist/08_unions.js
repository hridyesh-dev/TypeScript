"use strict";
// values can be this or that
// can be many types
function printId(id) {
    if (typeof (id) === "string") {
        id.toUpperCase();
    }
    else {
        id.toFixed(2);
    }
    console.log("THE ID IS : ", id);
}
function describeUser(u) {
    //this block is for admins 
    if (u.role === "Admin") {
        console.log(u.permissions);
    }
    else {
        //this block is for customers
        console.log(u.loyaltyPoints);
    }
}
//IN OPERATORS
function describeUserInOperator(u) {
    if ('permissions' in u) {
        console.log(u.role, 'Admin User');
    }
    else {
        console.log(u.role, "Customer");
    }
}
//union of ARRAYS AND array of UNIONS
//array of union
// this array can have data of both types nubers and unions
const arrOfUnion = ["a", 1, "b", 2];
//union of arrays
//this will either have string or numbers
const unionOfArrays = Math.random() > 0.1 ? ["x", "y", "z"] : [1, 2, 3];
