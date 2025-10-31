"use strict";
function move(d) {
    console.log(d);
}
// ts gives literal type as "left"
const d1 = "left";
move(d1);
//let case mai type widen ho sakti hai aise later koi bhi value agar assign hogi 
// ts widens to string as let can be changed later
//ts will not allow to call fucntion where type is direction
let d2 = "left";
// move(d2)
//aise error nahi aaye ga
let d3 = "left";
move(d3);
