const data = {
  user: {
    id: 1,
    profile: {
      name: "Alice",
      address: {
        city: "Delhi",
        pin: 110001,
      },
    },
    hobbies: ["reading", "coding"],
  },
};

function searchValue(data, target) {
  // ✅ Found value
  if (data === target) {
    return true;
  }

  // ✅ Stop if primitive or null
  if (typeof data !== "object" || data === null) {
    return false;
  }

  // ✅ Traverse object OR array
  for (const key in data) {
    if (searchValue(data[key], target)) {
      return true; // early exit
    }
  }

  return false;
}
// function searchValue(obj, value) {
//   function isEqual(obj, value) {
//     if (typeof obj !== typeof val) {
//       return false;
//     }
//     if(typeof obj !== value){
//         return obj===value
//     }
//     if (Array.isArray(obj)) {
//       return isArrayEqual(obj,value);
//     }
//   }
//   if (isEqual(obj, value)) {
//     return true;
//   }
//   if (typeof obj !== "object" || obj === null) {
//     return false;
//   }
//   for (const key in obj) {
//     if (searchValue(obj[key], value)) {
//       return true;
//     }
//   }
//   return false;
// }

console.log("ans----------", searchValue(data, "Delhi")); // true
console.log("ans----------", searchValue(data, "coding")); // true
console.log("ans----------", searchValue(data, 999)); // false
