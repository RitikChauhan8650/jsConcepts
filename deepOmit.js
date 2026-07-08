const obj = {
  id: 1,
  password: "123",
  profile: {
    name: "Ritik",
    password: "abc",
    address: {
      city: "Delhi",
      password: "xyz",
    },
  },
};
let key = "password";
function deepOmit(obj, keyToRemove) {
  // Base case: primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepOmit(item, keyToRemove));
  }
  const ans = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === keyToRemove) {
      continue;
    }
    ans[key] = deepOmit(value, keyToRemove);
  }
  return ans;
}

console.log("Ans----------", deepOmit(obj, key));
