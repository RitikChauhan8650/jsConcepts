button.addEventListener("click", function () {
  console.log(this);
});

// ✅ this = clicked DOM element

// Arrow function:

// button.addEventListener("click", () => {
//   console.log(this);
// });

// ❌ Not element — inherits outer scope
