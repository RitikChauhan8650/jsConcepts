function chunk(arr, size) {
  let output = [];
  let temp = [];

  for (let num of arr) {
    temp.push(num);

    if (temp.length === size) {
      output.push(temp);
      temp = [];
    }
  }

  if (temp.length > 0) {
    output.push(temp);
  }

  return output;
}

//optimized code
function chunk2(arr, size) {
  let output = [];

  for (let i = 0; i < arr.length; i += size) {
    output.push(arr.slice(i, i + size)); // Extract chunks using slice
  }

  return output;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size = 2;

let rrr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let size2 = 2;

console.log("chunks111111------", chunk(arr, size));

console.log("chunks------", chunk2(rrr, size2));
