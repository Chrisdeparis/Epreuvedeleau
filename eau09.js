// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.
// Exemples d’utilisation :
// $> python exo.py 20 25
// 20 21 22 23 24
// $> python exo.py 25 20
// 20 21 22 23 24
// $> python exo.py hello
// error

const args = process.argv.slice(2);

// Check if there are exactly two arguments
if (args.length !== 2) {
  console.error("Error: exactly two arguments are required");
  return;
}

// Parse the arguments as numbers
const min = parseInt(args[0]);
const max = parseInt(args[1]);

// Check if the arguments are valid numbers
if (isNaN(min) || isNaN(max)) {
  console.error("Error: both arguments must be numbers");
  return;
}



// Print all numbers between min (inclusive) and max (exclusive)
for (let i = min; i < max; i++) {
  console.log(i);
}
for(let i = max; i < min; i++) {
  console.log(i);
}
