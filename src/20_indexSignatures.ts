// the key is string type and it is mapped to a number value
type NumberDict={[k:string]:number}

const counters:NumberDict = {}
counters['Likes']=1200
counters['Comments']=1000
counters['Shares']=400

//alternate way to do it : record

//record : much tighter and safer
//tight : Noting extra
type Metrics = Record<"likes" | "views" | "shares" ,number>
const mm:Metrics={
    likes:100,
    views:300,
    shares:23
}


//dynamic keys at runtime , instead of record we will use map
const priceMap= new Map<string,number>()
priceMap.set('Likes',1)

type LooseMap=Record<string,number|undefined>
const looseMap:LooseMap={}
looseMap["x"]=10
looseMap["y"]=undefined
