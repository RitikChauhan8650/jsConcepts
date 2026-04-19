// { a: { b: { c: 1 } } }
// → { "a.b.c": 1 }

const input={ a: { b: { c: 1 } } }

function flattenObj(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      // go deeper
      flattenObj(obj[key], newKey, result);
    } else {
      // assign value
      result[newKey] = obj[key];
    }
  }

  return result;
}
console.log("ans---------",flattenObj(input))