// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach(function (student) {
//       // Error: Cannot read property 'title' of undefined
//       alert(this.title + ": " + student);
//     });
//   },
// };

// group.showList();

let group = {
  title: "Our Group",
  students: ["John", "Pete", "Alice"],

  showList() {
    this.students.forEach((student) => {
      console.log("ans1--", this.title + ": " + student);
    });
  },

  //   we can use bind() also
  showList() {
    this.students.forEach(
      function (student) {
        console.log("ans2------", this.title + ": " + student);
      }.bind(this),
    );
  },
};

group.showList();
// Arrow functions do not create their own this.
// They use the surrounding (showList) this.
