// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !

// $> python exo.py 42
// error

function capitalizeAlternatingLetters(string) {
  // Recherche un nombre
  let res = string.match(/\d+/);
  // Affiche le résultat
  if (res) {
    console.log("error");
    return;
  } else {
    let result = "";
    for (let i = 0; i < string.length; i++) {
      const char = string[i];

      if (/^[a-zA-Z]$/.test(char)) {
        // Si la lettre est une lettre regex (A-Z, a-z)
        if (i % 2 === 0) {
          // Si c'est la deuxième lettre, on la met en majuscule
          result += char.toUpperCase();
        } else {
          // Sinon, on la laisse en minuscule
          result += char;
        }
      } else {
        // Si ce n'est pas une lettre regex, on la laisse telle quelle
        result += char;
      }
    }

    return result;
  }

  if (process.argv.length !== 3) {
    console.log("error");
    return;
  }
  if (/^[a-zA-Z]$/.test(inputString)) {
    console.error("Error: A string must be provided!");
    return;
  }
}

const inputString = process.argv[2];

console.log(capitalizeAlternatingLetters(inputString));

