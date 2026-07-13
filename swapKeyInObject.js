const obj = {
  a: 1,
  b: 1,
};

const reversed = Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [v, k]),
);

console.log(reversed);
// { 1: "b" }  // "a" is overwritten

// This duplicate-values variation is a common JavaScript interview follow-up.
const obj = {
  a: 1,
  b: 1,
  c: 2,
};

const result = {};

for (const key in obj) {
  const value = obj[key];

  if (!result[value]) {
    result[value] = [];
  }

  result[value].push(key);
}

console.log(result);
