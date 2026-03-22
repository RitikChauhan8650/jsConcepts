function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}
let closure1 = outer();
let closure2 = outer();
closure1();
closure2();
closure1();
// output
// 1
// 1
// 2
// he concept illustrated in the provided code is known as a closure. A closure is a combination of a function and the lexical environment within which that function was declared.
// This lexical environment consists of the variables that were in scope at the time the closure was created.

// The outer function defines a variable count and a nested function inner.
// The inner function is returned from the outer function, creating a closure. This closure includes the inner function and the reference to the count variable in the lexical scope of outer.
// When you call outer(), and assign the result to closure1 and closure2, you are effectively creating two separate closures, each with its own count variable. The inner functions
// in these closures can access and modify their respective count variables even though the outer function has already finished execution.
