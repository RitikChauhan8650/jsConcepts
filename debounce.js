const log = () => console.log("Debounced Call");
const debouncedLog = debounce(log, 1000);

debouncedLog(); // Call 1
debouncedLog(); // Call 2 within 1 second
debouncedLog(); // Call 3 within 1 second
// Only one "Debounced Call" will be logged after 1 second.

/**
 * Debounce function
 * @param {Function} fn - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @return {Function} - The debounced version of the input function
 */
function debounce(fn, delay) {
  let timeout; // Holds the timer reference

  return function (...args) {
    // Clear the previous timer
    clearTimeout(timeout);

    // Start a new timer
    timeout = setTimeout(() => {
      fn.apply(this, args); // Call the function with the correct context and arguments
    }, delay);
  };
}
