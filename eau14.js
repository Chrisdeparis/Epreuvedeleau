// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri par sélection.
// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_select_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }
// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6
// $> python exo.py test test test
// error
let args = process.argv.slice(2);
let args2string = args.toString();
// console.log(args2string.replace(/,/g, ' '));
let letter = /^[a-zA-Z]+$/;
let digit = /^\d+$/;
let verif = digit.test(args2string);
let check = letter.test(args2string);
// console.log(verif);
// console.log(typeof args);

const my_select_sort = (tab) => {
  for (let i = 0; i < tab.length; i++) {
    //stocker l'index de l'élément minimum
    let min = i;
    for (let j = i + 1; j < tab.length; j++) {
      if (tab[j] < tab[min]) {
        // mettre à jour l'index de l'élément minimum
        min = j;
      }
    }
    let tmp = tab[i];
    tab[i] = tab[min];
    tab[min] = tmp;
  }
  return tab;
};

my_select_sort(args);


// pour testes la regex il faut la transformer en string
let str = args.toString();
let regDigit = /[0-9]+/;
let checkDigit = regDigit.test(str);
// console.log(checkDigit);
// verif condition
if (checkDigit === true) {
  console.log(args.join(' '));
} else {
  console.log('error');
}