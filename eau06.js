// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !

// $> python exo.py 42
// error

// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !

// $> python exo.py 42
// error

function alternateCase(s) {
  if (!isNaN(s)) {
    return "error";
  } else {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      let c = s[i];
      if (c.match(/[a-zA-Z]/)) {
        if (i % 2 === 0) {
          result += c.toUpperCase();
        } else {
          result += c.toLowerCase();
        }
      } else {
        result += c;
      }
    }
    return result;
  }
}

// Test the function
let inputString = process.argv[2];
console.log(alternateCase(inputString));


