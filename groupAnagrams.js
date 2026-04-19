// input::::["eat", "tea", "tan", "ate", "nat", "bat"]
// output:::
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

// input::::["eat", "tea", "tan", "ate", "nat", "bat"]
// output:::
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

const output = Object.values(
  input.reduce((acc, word) => {
    const key = word.split("").sort().join("");

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(word);

    return acc;
  }, {})
);

console.log("output------",output)