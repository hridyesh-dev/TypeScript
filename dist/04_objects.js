"use strict";
/*
    how to model object property , how to use
    required,optional,readonly properties
*/
//email?:string-> email is not required but if it is present it is string
//this user1 is of User type
const user1 = {
    id: "u1",
    name: "Ram",
    createdAt: new Date()
};
const user2 = {
    id: "u2",
    name: "Hanuman",
    email: "hanuman@ram.com",
    createdAt: new Date()
};
const c1 = { something: 1 };
const c2 = { likes: 2000, views: 10000, shares: 200, random: 5 };
