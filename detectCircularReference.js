const obj1 = {};
obj1.self = obj1;

const obj2 = {
  user: {},
};

obj2.user.parent = obj2;

const obj3 = {
  name: "Ritik",
  address: {
    city: "Delhi",
  },
};

const arr = [];
arr.push(arr);

function hasCircular(obj, seen = new WeakSet()) {
  if (obj === null || typeof obj !== "object") {
    return false;
  }

  // Circular detected
  if (seen.has(obj)) {
    return true;
  }

  seen.add(obj);

  for (const key in obj) {
    if (hasCircular(obj[key], seen)) {
      return true;
    }
  }

  return false;
}
console.log("ans---------", hasCircular(obj1)); // true
console.log("ans2---------", hasCircular(obj2)); // false
console.log("ans3---------", hasCircular(obj3)); // false
console.log("array:", hasCircular(arr)); // true
