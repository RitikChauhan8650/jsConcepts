let arr = [1, 2, 2, 3, 3, 3];

const ans = arr.reduce((acc, currentval) => {
  acc[currentval] = acc[currentval] ? acc[currentval] + 1 : 1;
  return acc;
}, {});

console.log("ans-----", ans);
