// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !

// $> python exo.py 42
// error
// Check if the input is valid
if (process.argv.length !== 3) {
  console.log("error");
  return;
}

// Get the string from the command line argument
let str = process.argv[2];

// Capitalize every other letter in the string
let result = "";
for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (i % 2 === 0 && ch >= "a" && ch <= "z") ch = ch.toUpperCase();
  else if (i % 2 === 0 && ch >= "A" && ch <= "Z") ch = ch.toLowerCase();
  result += ch;
}

// Display the result
console.log(result);

