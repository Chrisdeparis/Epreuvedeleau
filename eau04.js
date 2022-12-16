// Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.

// Check if the input is valid
if (process.argv.length < 3 || isNaN(process.argv[2]) || process.argv[2] < 0) {
  console.log(-1);
  return;
}

// Get the number from the command line argument
let num = parseInt(process.argv[2]);

// Check if the number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Find the first prime number greater than the input number
while (true) {
  num++;
  if (isPrime(num)) {
    console.log(num);
    break;
  }
}
