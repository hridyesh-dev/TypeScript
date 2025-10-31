//canthave anything else , readonly can have only these values
//pehle literal type bana diya in values ko
const roles=[ "admin" , "user" , "operator" ] as const 


// derive a union from the array
// voh sabhi values ko Role type mai fit krr diya
//derive the type directly
type Role=(typeof roles)[number]

function setRole(r:Role){
    console.log(r);
}

setRole("admin")