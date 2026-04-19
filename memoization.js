

const calulate= memoization((a,b)=>a+b)

function memoization(calculate){
    let cache={}
    return function(...args){
        const key = JSON.stringify(args);

        if(key in cache){
            return cache[key]
        }
        console.log("second time---")
        const result=calculate.apply(this,args)
        cache[key]=result
        return result;
    }
}

console.log("ans1---------",calulate(2,3))
console.log("ans2-----------",calulate(2,3))
