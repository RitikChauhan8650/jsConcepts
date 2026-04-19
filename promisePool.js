// promisePool(tasks, limit)

// 👉 Run only limit promises at the same time

// Example:

// limit = 2
// Only 2 requests run concurrently
// When one finishes → start next

/**
 * Concurrency Limit / Promise Pool
 * Run: node concurrency-limit.js
 */

// -------------------------------
// Main Function
// -------------------------------
async function runTasks(tasks, limit) {
  const results = new Array(tasks.length);
  let nextTaskIndex = 0;

  async function worker(workerId) {
    while (nextTaskIndex < tasks.length) {
      const currentIndex = nextTaskIndex++;

      console.log(`Worker ${workerId} running task ${currentIndex}`);

      try {
        const result = await tasks[currentIndex]();
        results[currentIndex] = result;
      } catch (error) {
        results[currentIndex] = error;
      }
    }
  }

  // create workers equal to concurrency limit
  const workers = Array.from({ length: limit }, (_, i) => worker(i + 1));

  await Promise.all(workers);

  return results;
}

// -------------------------------
// Mock Async Tasks
// -------------------------------
function createTask(id, delay) {
  return () =>
    new Promise((resolve) => {
      console.log(`Start Task ${id}`);

      setTimeout(() => {
        console.log(`Finish Task ${id}`);
        resolve(`Result ${id}`);
      }, delay);
    });
}

// -------------------------------
// Tasks List
// -------------------------------
const tasks = [
  createTask(1, 2000),
  createTask(2, 1000),
  createTask(3, 1500),
  createTask(4, 800),
  createTask(5, 1200),
];

// -------------------------------
// Execute
// -------------------------------
(async () => {
  console.log("\nRunning with concurrency limit = 2\n");

  const results = await runTasks(tasks, 2);

  console.log("\nAll Tasks Completed");
  console.log(results);
})();
