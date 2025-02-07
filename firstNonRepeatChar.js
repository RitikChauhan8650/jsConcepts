var firstNonRepeatingChar = (value) => {
  console.log("valuesss------", value);
  let charCount = {};
  for (let char of value) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of value) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
};
console.log("output111---------", firstNonRepeatingChar("swiss")); // Output: "w"
console.log("output2222222------", firstNonRepeatingChar("abcab")); // Output: "c"
console.log("output3333333------", firstNonRepeatingChar("aabb")); // Output: null
