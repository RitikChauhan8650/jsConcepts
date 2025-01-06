async function customPromiseAll(arr) {
  return arr;
}
// const data = await customPromiseAll([1, 2, 3, 4, 5]);
// This will throw a SyntaxError because `await` can only be used inside an async function.
// console.log("data1111", data);

(async () => {
  const data = await customPromiseAll([1, 2, 3, 4, 5]);
  console.log("data2222", data);
})();

//promise.all
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

// Example 1: A Simple Promise
// javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulating success or failure

  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

// Using the promise
myPromise
  .then((result) => console.log(result)) // Output: "Operation successful!"
  .catch((error) => console.log(error));

// Problem Statement:
// You are asked to implement a function customPromiseAll(promises) that mimics the behavior of JavaScript's built-in Promise.all. It should take an array of promises and return a single promise that resolves when all the promises in the array are resolved, or rejects if any promise is rejected.
async function customPromiseAll(promises) {
  // Check if the input is an array
  if (!Array.isArray(promises)) {
    throw new TypeError("Input must be an array");
  }

  // Array to store the resolved values
  const results = [];

  // Loop through each promise in the array
  for (let i = 0; i < promises.length; i++) {
    const currentPromise = promises[i];
    try {
      // Wait for each promise to resolve (or handle non-promise values)
      const result = await currentPromise;
      results.push(result); // Add resolved value to the results array
    } catch (error) {
      // If any promise rejects, immediately reject with the error
      return Promise.reject(error);
    }
  }

  // Return a promise that resolves with the array of resolved values
  return Promise.resolve(results);
}
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

customPromiseAll([p1, p2, p3])
  .then((result) => console.log("result11111111", result)) // Output: [1, 2, 3]
  .catch((error) => console.log("error11111111", error));

const p4 = Promise.reject("Error");
customPromiseAll([p1, p2, p4])
  .then((result) => console.log("result2222222", result)) // Will not reach here
  .catch((error) => console.log("error2222", error)); // Output: "Error"
