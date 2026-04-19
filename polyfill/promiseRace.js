const p1 = Promise.reject("Error: Failed instantly!");
const p3 = new Promise((res) => setTimeout(() => res(20), 100));
const p2 = Promise.reject("Error: Failed instantly!");




myPromiseRace([p1, p2, p3]).then(console.log);


function myPromiseRace(promises){
    return new Promise((resolve,reject)=>{

        promises.forEach((promiseData,index)=>{
            // 2. Ensure every item is treated as a promise
            Promise.resolve(promiseData)
                .then((val)=>{
                    resolve(val)
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    })
}