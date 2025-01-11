let nums = [1, 3, 2, 5];

function findMissingNumber() {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return nums[i] - 1;
    }
  }
}
console.log("output------", findMissingNumber());
