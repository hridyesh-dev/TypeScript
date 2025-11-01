// tuples -> fixed length and fixed types
//fixed length fixed type indexing also matters
let userEntry :[string,number]=['Hri',20]
// userEntry=['ram']
// userEntry=[20,'ram']
userEntry=['ram',20]

// optional tuples
type responseRow=[status:number,message?:string]
const r11:responseRow=[200]
const r22:responseRow=[200,"this is my message"]

//readonly tupples
//fixed length fixed types cant be changed
const corners:readonly[number,number]=[0,0]
