// reverseWords("  Hello   World  "); // Output: "World Hello"
function reverseWords(s) {
  const words = s.trim().split(/\s+/);
  console.log("words-------", words);
  const reversedWords = words.reverse();
  console.log("reversewords-------", reversedWords);
  return reversedWords.join(" ");
}

// Test the function
let ans = reverseWords("JavaScript is fun"); // Output: "fun is JavaScript"
console.log("ans-----", ans);
