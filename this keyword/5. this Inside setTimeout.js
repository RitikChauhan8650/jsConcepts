const user = {
  name: "Ritik",
  show() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};

user.show();

// ❌ undefined

// Fix
// setTimeout(() => {
//   console.log(this.name);
// });
