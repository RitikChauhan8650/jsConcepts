

const fn = once(() => console.log("Hello"));

function once(fn){
    let isCalled=false
    return function(...args){
        if(!isCalled){
            isCalled=true
            return fn.apply(this,args)
        }
    }
}
fn(); // runs
fn(); // ignored