function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("Slow Fibonacci");
console.log("Slow version:", fibonacci(40)); // This is slow because it recalculates the same values repeatedly.
console.timeEnd("Slow Fibonacci");

// Memoized Version
function memo() {
  const cache = {};

  function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    if (n <= 1) {
      return n; // Base case
    }

    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  }
  return fib;
}

const fib2 = memo();
console.time("Memoized Fibonacci");
console.log("Memoized version:", fib2(40));
console.timeEnd("Memoized Fibonacci");

// Generic Memoization Function
function memoize(fn) {
  const cache = new Map(); // Use Map for better performance with key lookups
  return function (...args) {
    const key = JSON.stringify(args); // Serialize arguments to use as a key
    if (cache.has(key)) {
      return cache.get(key); // Return cached result
    }
    const result = fn(...args); // Compute result
    cache.set(key, result); // Cache the result
    return result;
  };
}

// Example: Memoized Fibonacci with Generic Utility
const fib3 = memoize(function (n) {
  if (n <= 1) return n;
  return fib3(n - 1) + fib3(n - 2);
});

console.time("Generic Memoized Fibonacci");
console.log("Generic version:", fib3(40)); // Fast!
console.timeEnd("Generic Memoized Fibonacci");
