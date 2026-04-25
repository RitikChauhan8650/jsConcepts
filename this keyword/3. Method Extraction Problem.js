const user = {
  name: "Ritik",
  greet() {
    console.log(this.name);
  },
};

const fn = user.greet;
fn();
// Output?

// ❌ undefined

// Because function lost object reference.

// 👉 Interview keyword: context lost
