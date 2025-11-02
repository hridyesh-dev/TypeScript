type inExample1={role:"Admin",permissions:string[]}
type inExample2={role:"User",expiresAt:Date}

type userExample = inExample1 | inExample2 

function describeUserExample( u : userExample ){
    if("permissions" in u){
        return(`Admin ${u.permissions.join(',')}`)
    }
    return `user ${u.expiresAt.toISOString()}`
}

console.log(describeUserExample({role:"Admin",permissions:["read"]}))

// Optional nullish : it is used to avoid runtime clashes 
// what is nullish ?? and falsy ||
//optional chaining obj?.a
type ProfileN3 = {
    name:string,
    contact?:{email?:string}
}

const P1N3:ProfileN3 = {
    name:"Hridy"
}

const P2N3:ProfileN3 = {
    name:"Hridyesh",
    contact:{email:"ben123@gmail.com"}
}

const email1N3=P1N3.contact?.email
const email2N3=P2N3.contact?.email

// nullish operator ?? this will use the right hand value when left is null or undefined

// OR OPERATOR || this will use default when the left is any falsy value --> (0,"",null,undefined,NaN)

const countFromServerN3:number|null=0;
const labelFromServerN3:string|undefined=""

const aN3=countFromServerN3 ?? 100 // keeps the 0 
const bN3=countFromServerN3 || 100 // will use 0 as it is a falsy value 


