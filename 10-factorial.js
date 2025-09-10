// Function to compute factorial recursively
// Recursive factorial function
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from command line
const arg = process.argv[2] ? parseInt(process.argv[2]) : NaN;

// Print result
console.log(factorial(arg));
