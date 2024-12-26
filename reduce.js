// syntax
// array.reduce(callback, initialValue);

// Parameters

// callback: A function executed on each element of the array. It takes four arguments:
// accumulator: The value being accumulated across iterations. It holds the result of the previous callback execution.
// currentValue: The current element being processed in the array.
// currentIndex (optional): The index of the current element.
// array (optional): The array being reduced.

// initialValue (optional): The initial value of the accumulator. If not provided, the first element of the array is used as the initial value, and the iteration starts from the second element.

// Return Value
// The final accumulated result after processing all the elements of the array.

const arr = [
  { name: "ritik", id: 1, age: 22 },
  { name: "vikas", id: 2, age: 45 },
  { name: "Gautam", id: 3, age: 23 },
  { name: "Devesh", id: 4, age: 90 },
];
const result = arr.reduce((acc, num) => {
  console.log("acc---", acc);
  console.log("num-----", num);
  console.log("num.age---", num.age);
  return acc + num.age;
}, 0);
console.log("result------", result);

// 1. Flattening a Nested Array
const nestedArray = [[1, 2], [3, 4], [5]];
const flattened = nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5]

// 2. Counting occurences
// reduce(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const occurences = fruits.reduce((acc, val) => {
  console.log("acc=================================", acc);
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log("ocurrnces-------", occurences);

// 3. Group Objects by Property
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
];
const groupedByAge = users.reduce((acc, user) => {
  acc[user.age] = acc[user.age] || [];
  acc[user.age].push(user);
  return acc;
}, {});
console.log(groupedByAge);

// 4. Finding Maximum Value
const numbers = [10, 25, 30, 5, 50];
const max = numbers.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(max); // Output: 50

//5. building a custom data structure
const people = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 40 },
];
const peopleByName = people.reduce((acc, person) => {
  acc[person.name] = person.age;
  return acc;
}, {});
console.log(peopleByName);
