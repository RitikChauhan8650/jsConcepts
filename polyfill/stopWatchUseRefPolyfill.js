// --- THE POLYFILL ENGINE ---
let memoStack = []; 
let cursor = 0;

function useRef(initialValue) {
    if (memoStack[cursor] === undefined) {
        memoStack[cursor] = { current: initialValue };
    }
    const ref = memoStack[cursor];
    cursor++;
    return ref;
}

// Simulates a React Render Cycle
function render(Component) {
    cursor = 0; // Reset cursor so hooks align
    return Component();
}

// --- THE STOPWATCH COMPONENT ---
function Stopwatch() {
    // This 'vault' stays the same across every simulated render
    const timerRef = useRef(null);
    
    // Regular variable (This will RESET every time render() is called)
    let localVariable = "Initial"; 

    return {
        start: () => {
            console.log(">> Starting Timer...");
            localVariable = "Running";
            
            // Store the ID in our Persistent Ref
            timerRef.current = setInterval(() => {
                console.log("   [Tick] Timer is running...");
            }, 500);
        },
        stop: () => {
            console.log(">> Stopping Timer...");
            // Even if we 're-rendered', timerRef.current still holds the ID
            clearInterval(timerRef.current);
            console.log(">> Timer Stopped! Local variable was:", localVariable);
        }
    };
}

// --- EXECUTION SIMULATION ---

// 1. First Render
console.log("--- Initial Render ---");
const instance = render(Stopwatch);

// 2. Start the timer
instance.start();

// 3. Simulate a "Re-render" after 1.2 seconds
// This mimics React re-running the Stopwatch function
setTimeout(() => {
    console.log("\n--- Re-rendering Component (State Change Simulation) ---");
    const newInstance = render(Stopwatch); 

    // 4. Try to stop it using the NEW instance after another second
    setTimeout(() => {
        newInstance.stop();
        process.exit(); // End the node process
    }, 1000);

}, 1200);