// 3️⃣ Implement Promise.all Polyfill
const p1 = Promise.resolve(10);
const p3 = new Promise((res) => setTimeout(() => res(20), 100));
const p2 = Promise.reject("Error: Failed instantly!");
myPromiseAll([p1, p2, p3]).then(console.log);

function myPromiseAll(promises){
    console.log("promises---------",promises)
    let promiseExecutionCount=0
    const results = [];

    if (promises.length === 0) {
      resolve(results);
      return;
    }
    return new Promise((resolve,reject)=>{
        if(promiseExecutionCount===promises.length){
            resolve(promises)
        }
        promises.forEach((promiseData,index)=>{
            Promise.resolve(promiseData)
                .then((value)=>{
                    results[index]=value
                    promiseExecutionCount++
                    if(promiseExecutionCount===promises.length){
                        resolve(results)
                    }
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    })
}


