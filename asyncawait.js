function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Running");
      resolve();
    }, ms)
  );
}
async function greet() {
  console.log("Starting...");
  delay(2000); //not block

  console.log("Not blocked"); //Block the code untill completion

  await delay(1000);
  console.log("Blocked");
}
greet();
