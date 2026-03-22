// arrowfn(); //if declared here than it give error bcz arrow function are not hoisted

var arrowfn = () => {
  console.log("arrow function called");
};

fn();
function fn() {
  console.log("normal function called");
}

//primitive
const a = 1;
const b = 1;
console.log(a === b);

// structurals are object and functions
const arr1 = [1];
const arr2 = [1];
console.log(arr1 === arr2);

const arr3 = [1];
let arr4 = [1];
console.log(arr3 === arr4);
arr4 = arr3;
console.log(arr3 === arr4);

const person1 = { name: "Batman" };
const batman = person1;
const person2 = { name: "Batman" };
console.log(Object.is(person1, batman));

console.log("nan");

console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log("arr");
const arr5 = [1, 2, 3];
const arr6 = [...arr5];

arr5.push(4);
console.log(arr6); //[1,2,3]
