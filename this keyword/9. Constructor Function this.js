function User(name) {
  this.name = name;
}

const u = new User("Ritik");
console.log(u.name);

// 👉 new creates new object and binds this.
