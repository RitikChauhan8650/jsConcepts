const obj = {
  name: "JS",
  outer() {
    function inner() {
      console.log(this.name);
    }
    inner();
  },
};

obj.outer();
