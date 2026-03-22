// https://www.youtube.com/watch?v=BJs2xbdzBcs&list=PLAjOh0819rC2rCAN1QjAk92sdm9cJsq7U&index=1
// forEach
 
const array=[1,2,3,4,5];

array.forEach((ele)=>{
    console.log("ele----",ele)
})


//using polyfill
function print(el){
    console.log("el1111=",el)
}
Array.prototype.myForEach= function(cb){
    for (let index=0;index<this.length;index++){
        cb(this[index])
    }

}

array.myForEach(print)