const arr = [1, 2, 3, 4, 5];
const k = 3;
const x = 3;

console.log("xxxxxxxxxxxxxxxx------------", findClosestNumbers(arr, k, x));

function findClosestNumbers(arr, k, x) {
  arr.sort((a, b) => {
    const diffA = Math.abs(a - x);
    const diffB = Math.abs(b - x);
    console.log("diffa-------", diffA);
    console.log("diffb---", diffB);
    if (diffA === diffB) {
      return a - b;
    }
    return diffA - diffB;
  });

  return arr.slice(0, k).sort((a, b) => a - b);
}
