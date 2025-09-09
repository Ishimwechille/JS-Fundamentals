const languages = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
let i = 0;
let result = '';

while (i < languages.length) {
  result += languages[i] + '\n';
  i++;
}

// Remove the last extra newline using trim()
console.log(result.trim());
