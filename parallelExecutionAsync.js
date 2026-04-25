const tasks = [
  () => Promise.resolve("Task 1 done"),
  () =>
    new Promise((_, reject) => setTimeout(() => reject("Task 2 failed"), 100)),
  () => Promise.resolve("Task 3 done"),
];

runParallel(tasks, (result) => {
  console.log("Callback received:", result);
});

function runParallel(tasks, callback) {
  tasks.forEach((task) => {
    const promise = task();

    promise
      .then((result) => {
        callback(result);
      })
      .catch((error) => {
        callback(error);
      });
  });
}
