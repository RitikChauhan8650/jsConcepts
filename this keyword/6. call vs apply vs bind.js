function greet(city) {
  console.log(this.name, city);
}

const user = { name: "Ritik" };

greet.call(user, "Delhi");
greet.apply(user, ["Delhi"]);
const fn = greet.bind(user);
fn("Delhi");
