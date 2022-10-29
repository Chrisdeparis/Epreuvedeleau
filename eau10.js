// Créez un programme qui affiche toutes les valeurs comprises entre deux nombres dans l’ordre croissant. Min inclus, max exclus.
// Exemples d’utilisation :
// $> python exo.py 20 25
// 20 21 22 23 24
// $> python exo.py 25 20
// 20 21 22 23 24
// $> python exo.py hello
// error
// let numbers = ['20', '25'];
let numbers = process.argv.slice(2);

// let str = process.argv.slice(2);
let args = numbers.toString();
let reg = /,/g;
let arg = args.replace(reg, ' ');
// chiffres uniquement
let regex = /^[a-zA-Z]+$/;
// console.log(typeof numbers);
let liste = [];

if (typeof numbers == 'object' && arg.match(regex)) {
  console.log('error');
  return;
}

let max = numbers[0],
  min = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  // If the element is greater
  // than the max value, replace max
  if (numbers[i] > max) {
    max = numbers[i];
  }

  // If the element is lesser
  // than the min value, replace min
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

for (let i = min; i < max; i++) {
  console.log(i);
}
