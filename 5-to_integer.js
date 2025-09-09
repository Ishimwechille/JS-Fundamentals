
const arg = process.argv[2]; // Get the first argument
const number = parseInt(arg); // Convert to integer

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}
