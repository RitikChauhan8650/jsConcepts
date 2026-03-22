

const fn=once((a,b)=>a+b)

function once(fn){
    let isCalled=false
    let ans=0

    return function(...args){
        if(!isCalled){
            ans=fn.apply(this,args)
            isCalled=true
        }
        return ans;
    }
}


console.log("firstTime-----------",fn(2,3))
console.log("second time--------------",fn(5,10))
