// Implement a function that creates a deep copy of nested objects and arrays, handling various data types.
// deep clone
const obj = {
  name: "Alice",
  age: 25,
  address: {
    city: "Delhi",
    pin: 110001,
  },
  skills: ["JS", "Node"],
  createdAt: new Date(),
};

function deepClone(value) {
  // 1. Handle primitive values
  if (value === null || typeof value !== "object") {
    return value;
  }

  // 2. Handle Date (optional but good)
  if (value instanceof Date) {
    return new Date(value);
  }

  // 3. Create new container
  const clone = Array.isArray(value) ? [] : {};

  // 4. Recursive copy
  for (let key in value) {
    console.log("key-------", key);
    console.log("value[key]-----", value[key]);
    if (value.hasOwnProperty(key)) {
      clone[key] = deepClone(value[key]);
    }
  }

  return clone;
}

const deepObj = deepClone(obj);
console.log("ans------", deepObj);
