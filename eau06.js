// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true

// $> python exo.py bonjour joure
// false

// $> python exo.py 42
// error



// Check if the input is valid
if (process.argv.length !== 4) {
  console.log("error");
  return;
}

// Get the strings from the command line arguments
let str1 = process.argv[2];
let str2 = process.argv[3];

// Check if str2 is inside str1
let result = str1.indexOf(str2) !== -1;

// Display the result
console.log(result);
