// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true

// $> python exo.py bonjour joure
// false

// $> python exo.py 42
// error
let args = process.argv.slice(2);

if (
  args == '' ||
  args[0] == '' ||
  args[1] == '' ||
  typeof parseInt(args[0]) == 'number'
) {
  console.log('error');
  return;
}

const containSubstr = (str, substr) => {
  let count = 0;
  let i = 0;
  let startIndex = 0;

  while (i < str.length) {
    if (substr[count] === str[i]) {
      if (count === substr.length - 1) {
        return true;
      }
      count++;
    } else {
      count = 0;
      i = startIndex;
      startIndex++;
    }
    i++;
  }
  return false;
};

let test = containSubstr(args[0], args[1]);
console.log(test);
