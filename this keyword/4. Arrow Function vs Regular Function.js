const obj = {
  name: "JS",
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};

obj.normal();
obj.arrow();
