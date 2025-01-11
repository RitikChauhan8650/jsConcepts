let paths = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];

var destCity = function () {
  const d1 = new Set();

  paths.map((data) => {
    d1.add(data[0]);
  });

  console.log("d1------", d1);

  for (const path of paths) {
    const dest = path[1];
    if (!d1.has(dest)) {
      return dest;
    }
  }
};

console.log("output------", destCity());
