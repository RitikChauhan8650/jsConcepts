function execute(a) {
  return function (b) {
    if (b !== undefined) {
      return execute(a + b);
    }
    return a;
  };
}
console.log("ans----------", execute(1)(2)(3));
