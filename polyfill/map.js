Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const number = [1, 2, 3, 4];
const ans = number.myMap((num) => num * 2);
console.log("ans-------", ans);
