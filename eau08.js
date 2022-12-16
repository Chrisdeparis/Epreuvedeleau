// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.
// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true
// $> python exo.py “Bonjour 36”
// false

const args = process.argv.slice(2);

// Check if there is exactly one argument
if (args.length !== 1) {
  console.error("Error: exactly one argument is required");
  return;
}

const s = args[0];

// Check if the input is a string
if (typeof s !== "string") {
  console.error("Error: input must be a string");
  return;
}

// Use a regular expression to check if the string contains only numbers
const regex = /^[0-9]+$/;
const result = regex.test(s);
console.log(result);
