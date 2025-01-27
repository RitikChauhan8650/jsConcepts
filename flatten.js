const arr = [1, [2, [3, 4], 5], 6];

function flatten(arr) {
  let result = [];

  for (let element of arr) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else {
      result.push(element);
    }
  }

  return result;
}

const output = flatten(arr);
console.log("output-------", output);
