// Recursive function to compute factorial
function factorial(n) {
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Get the argument from the command line
const arg = parseInt(process.argv[2]);

// Print the factorial
console.log(factorial(arg));
