// Créez un programme qui détermine si une chaîne de caractères ne contient que des chiffres.
// Exemples d’utilisation :
// $> python exo.py “4445353”
// true
// $> python exo.py 42
// true
// $> python exo.py “Bonjour 36”
// false
// the match() method retrieves the result of matching a string against a regular expression.

// let test = '6654';
// transformer array en string pour argument
let str = process.argv.slice(2);
let args = str.toString();
let regex = /,/g;
let arg = args.replace(regex, ' ');
// chiffres uniquement
let reg = /^\d+$/;

const checkNumber = (arg) => {
  if ((typeof arg == 'string' && arg.match(reg)) || typeof arg == 'number') {
    console.log(true);
  } else {
    console.log(false);
  }
};
checkNumber(arg);