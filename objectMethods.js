const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); 
// [["a", 1], ["b", 2], ["c", 3]]

const entries = [["a", 1], ["b", 2], ["c", 3]];

const obj2 = Object.fromEntries(entries);
console.log(obj2);
// { a: 1, b: 2, c: 3 }


const obj3 = { a: 1, b: 2, c: 3 };

const keyValueStrings = Object.entries(obj3).map(([key, value]) => `${key}: ${value}`);
console.log(keyValueStrings);
// ["a: 1", "b: 2", "c: 3"]
