function unflattenObj(flatObj) {
  const result = {};

  for (let key in flatObj) {
    const keys = key.split(".");
    let current = result;

    keys.forEach((k, index) => {
      if (index === keys.length - 1) {
        current[k] = flatObj[key];
      } else {
        if (!current[k]) {
          current[k] = {};
        }
        current = current[k];
      }
    });
  }

  return result;
}

const input = { "a.b.c": 1 };

console.log(unflattenObj(input));