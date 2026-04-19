// 1. Global storage for all hooks
let memoStack = []; 
let cursor = 0;

function useRef(initialValue) {
    // 2. Check if this is the first time this specific hook is called
    // We use the cursor to identify the "slot" in memory
    if (!memoStack[cursor]) {
        // Create the object { current: ... } only once
        memoStack[cursor] = { current: initialValue };
    }

    // 3. Grab the reference and increment cursor for the next hook
    const ref = memoStack[cursor];
    cursor++;

    return ref;
}

// 4. A dummy "Dispatcher" to simulate React's render cycle
function render(Component) {
    cursor = 0; // CRITICAL: Reset the cursor so hooks align on every render
    return Component();
}


function MyComponent() {
    const ref1 = useRef(0);
    const ref2 = useRef("Hello");

    console.log("Ref1:", ref1.current, "| Ref2:", ref2.current);

    // Simulate a mutation
    ref1.current += 1;
}

// First Render
console.log("--- Render 1 ---");
render(MyComponent); 

// Second Render
console.log("--- Render 2 ---");
render(MyComponent); 

