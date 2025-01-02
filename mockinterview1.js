const arr = ["one", "two", "three"];
const anotherArr = ["hello"];

const res1 = arr.includes("onetwo");
const res2 = arr.includes("ll");
const res3 = arr.includes("one");
const res4 = arr.includes("one", "two", "onetwo", "4");

console.log("res1----", res1);
console.log("res2-----", res2);
console.log("res33--------", res3);
console.log("res4------", res4);
