// Question:
// Write a function called findSubarraysWithSum that takes an array of integers and a target sum as inputs.
//  The function should return all the unique subarrays from the input array that sum up to the target sum. A subarray is a contiguous part of the array.

//sliding window
function findSubarraysWithSum(inputArr, target) {
  let result = [];
  let start = 0;
  let sum = 0;

  for (let end = 0; end < inputArr.length; end++) {
    sum += inputArr[end];

    while (sum > target && start <= end) {
      sum -= inputArr[start];
      start++;
    }

    if (sum === target) {
      result.push(inputArr.slice(start, end + 1));
    }
  }

  return result;
}

let inputArr = [1, 2, 3, 4, 5];
let target = 5;
let ans = findSubarraysWithSum(inputArr, target);

console.log("sum:", ans);
