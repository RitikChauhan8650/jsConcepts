var obj = { a: 1, b: 2 };

//for shallow copy
var objclone = Object.assign({}, obj);
console.log(objclone);

// for shallow copy
var objclone2 = { ...obj };
console.log(objclone2);

//for deep copy
var t = JSON.parse(JSON.stringify(obj));
console.log(t);

console.log(typeof undefined == typeof NULL);
console.log(typeof undefined === typeof NULL);

var a = [1, 2, 3];
a[9] = 66;

console.log(a[6]);

// How do you add an element at the begining of an array? How do you add one at the end?
a.push(7);
a.unshift(9);
console.log(a);

// With ES6, one can use the spread operator:

a = ["start", ...a];
a = [...a, "end"];
console.log(a);

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
//outpu:0,1,2,3,4

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// output:5,5,5,5,5
// The reason it prints different values for each iteration is due to the fact that let has block-level scope,
// which means a new variable i is created for each iteration of the loop.
// This behavior is different from var, which has function-level scope and
// results in a single variable shared across all loop iterations.

var x = 21;
var girl = function () {
  console.log(x);
  var x = 20;
};
girl();
//output:undefined
// It’s because JavaScript initialization is not hoisted.

// (Why doesn’t it show the global value of 21? The reason is that when the function is executed,
//  it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one.)

// This concept is known as "currying" or "partial application"
function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}
console.log(sum(4, 5));
console.log(sum(4)(7));
