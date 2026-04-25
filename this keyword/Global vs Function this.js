console.log(this);

function test() {
  console.log(this);
}

test();

// Expected Answer
// Browser → window
// Node.js → {} or global
// In strict mode → undefined
