// Différence minimum absolue
// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
// Exemples d’utilisation :
// $> python exo.py 5 1 19 21
// 2
// $> python exo.py 20 5 1 19 21
// 1
// $> python exo.py -8 -6 4
// 2

const args = process.argv.slice(2);

// Check if there are at least two arguments
if (args.length < 2) {
  console.error("Error: at least two arguments are required");
  return;
}

// Parse the arguments as numbers
const numbers = args.map(Number);

// Check if all arguments are valid numbers
if (numbers.some(isNaN)) {
  console.error("Error: all arguments must be numbers");
  return;
}

// Sort the numbers in ascending order
numbers.sort((a, b) => a - b);

// Find the minimum difference between two consecutive numbers
const minDifference = numbers.reduce((prev, curr, i, arr) => {
  if (i === 0) {
    return Infinity;
  }
  return Math.min(prev, curr - arr[i - 1]);
}, Infinity);

// Print the result
console.log(minDifference);
