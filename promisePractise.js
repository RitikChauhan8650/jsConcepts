const promise= new Promise((resolve,reject)=>{
    resolve(("data fetched successfully"))
})

promise.then((result)=>console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("finished"))


// 🔹 3. Important Methods of Promise
// 1. then()

// Used to handle fulfilled state.

// Promise.resolve(10).then(value => console.log(value)); // 10

// 2. catch()

// Used to handle rejected state.

// Promise.reject("Error").catch(err => console.log(err)); // Error

// 3. finally()

// Runs whether success or failure.

// Promise.resolve("Done")
//   .finally(() => console.log("Cleanup done!"));