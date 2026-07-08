let arr = [1, 2, 3, 4];

Array.prototype.myReduce = function (callback, intiialValue) {
  var accumulator = intiialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};

const ans = arr.myReduce((acc, currentvalue) => {
  return acc + currentvalue;
}, 0);

console.log(ans);
