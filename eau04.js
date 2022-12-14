// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.
// Check if the input is valid
if (process.argv.length < 3 || isNaN(process.argv[2]) || process.argv[2] < 0) {
  console.log(-1);
  return;
}

// Get the Nth element from the command line argument
let n = parseInt(process.argv[2]);

// Define the Fibonacci sequence
let fibonacci = [0, 1];

// Generate the Fibonacci sequence up to the Nth element
for (let i = 2; i <= n; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

// Display the Nth element
console.log(fibonacci[n]);
