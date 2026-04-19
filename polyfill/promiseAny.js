function myPromiseAny(promises) {
  return new Promise((resolve, reject) => {
    let errorCount = 0;
    const errors = []; // Optional: to collect all errors for the final rejection

    // Handle empty arrays (Promise.any on an empty array rejects immediately)
    if (promises.length === 0) {
      return reject(new AggregateError([], "All promises were rejected"));
    }

    promises.forEach((promiseData, index) => {
      Promise.resolve(promiseData)
        .then((val) => {
          // As soon as ONE succeeds, we resolve the whole thing
          resolve(val);
        })
        .catch((error) => {
          errorCount++;
          errors[index] = error;

          // ONLY reject if EVERY promise has failed
          if (errorCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// Testing with your variables
const p1 = Promise.reject("Error: Failed instantly!");
const p3 = new Promise((res) => setTimeout(() => res(20), 100));
// const p3= Promise.reject("Error: Failed instantly!");
const p2 = Promise.reject("Error: Failed instantly!");

// This will now log 20, because p1 and p2 fail, but p3 eventually succeeds!
myPromiseAny([p1, p2, p3])
  .then(console.log)
  .catch((err) => console.error("Final Failure:", err));