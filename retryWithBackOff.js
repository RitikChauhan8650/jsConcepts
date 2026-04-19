

let count=0
function apiCall() {
  return new Promise((resolve, reject) => {
    count++;
    console.log("Attempt:", count);

    if (count < 3) {
      reject("Fail");
    } else {
      resolve("Success");
    }
  });
}

let retries=3
let delay=2000

async function retryWithBackOff(apiCall,retries,delay){

    return new Promise((resolve,reject)=>{
        function attempt(n,currentDelay){
                apiCall()
                    .then(resolve)
                    .catch((err)=>{
                        if (n === 0) {
                            reject(err);
                        } else {
                            setTimeout(() => {
                                attempt(n - 1, currentDelay * 2);
                            }, currentDelay);
                        }
                })
        }
        attempt(retries,delay)
    })
}
console.log("ans-----------",retryWithBackOff(apiCall,retries,delay).then(console.log).catch(console.error))



