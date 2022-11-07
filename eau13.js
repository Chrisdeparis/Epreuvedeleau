// Créez un programme qui trie une liste de nombres. Votre programme devra implémenter l’algorithme du tri à bulle.
// Vous utiliserez une fonction de cette forme (selon votre langage) :
// my_bubble_sort(array) {
// 	# votre algorithme
// 	return (new_array)
// }
// Exemples d’utilisation :
// $> python exo.py 6 5 4 3 2 1
// 1 2 3 4 5 6
// $> python exo.py test test test
// error
let args = process.argv.slice(2);
// console.log( args);
// chiffres uniquement
let reg = /^\d+$/;
let letter = /^[a-zA-Z]+$/;
let check = letter.test(args);
// console.log(check);
if(typeof args == 'object' || check == true) {
    console.log('error');
} else {

    const bubble_sort = (args) => {
        let tab = [];
        // console.log(tab);
        tab = args;
        let result = tab;
        let i = 1;
        let changed;
        do {
          changed = false;
          for (i = 0; i < tab.length - 1; i++) {
            if (tab[i] > tab[i + 1]) {
              let tmp = tab[i];
              tab[i] = tab[i + 1];
              tab[i + 1] = tmp;
              changed = true;
            }
          }
        } while (changed);
      
        return result.toString().replace(/,/g, ' ');
      };
      
      console.log(bubble_sort(args));
      
}

