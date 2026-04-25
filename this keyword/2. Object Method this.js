const user = {
  name: "Ritik",
  greet() {
    console.log(this.name);
  },
};

user.greet();

// ✅ this = user

// 👉 Rule: Object before dot owns this.
