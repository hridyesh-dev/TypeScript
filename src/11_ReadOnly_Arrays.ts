
const xss=[1,2,34]
//read only arrays
const ys:readonly number[]=[1,2,3]
//generic form way
const yss:ReadonlyArray<number>=[1,2,3,4]

xss[0]=10;

/*
    yss.push(10) //cant do it immutable
    yss.pop()
    yss.splice(0,1)
*/

// when to use readonly arrays
function sum(nums:readonly number[]):number{
    let s=0;
    for(const n of nums){
        s+=n;
    }
    return s;
}

// we can pass normal array to readonly params , it is allowed
console.log(sum(xss));

const res=xss.map((e)=>e*2)
