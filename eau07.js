// Créez un programme qui met en majuscule une lettre sur deux d’une chaîne de caractères. Seule les lettres (A-Z, a-z) sont prises en compte.

// Exemples d’utilisation :
// $> python exo.py “Hello world !”
// HeLlO wOrLd !

// $> python exo.py 42
// error
let args = process.argv.slice(2);

console.log(args);
// if(typeof args == 42 ){
//   console.log('error');
//   return;
// }
args = args
  .split('')
  .map((letter, i) =>
    i % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
  )
  .join('');

console.log(args);
