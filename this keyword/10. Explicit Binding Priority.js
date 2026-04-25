const obj1 = { name: "A" };
const obj2 = { name: "B" };

function show() {
  console.log(this.name);
}

const bound = show.bind(obj1);
bound.call(obj2);
