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

function myBubbleSort(arr) {
  // Vérifiez que l'argument est bien un tableau de nombres
  if (!Array.isArray(arr) || arr.some(isNaN)) {
    return null;
  }

  // Implémentation de l'algorithme de tri à bulle
  let n = arr.length;
  let temp;

  while (n > 0) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    n--;
  }

  // Retournez le tableau trié
  return arr.join(' ');
}


let result = myBubbleSort(args);

if (result === null) {
  console.error("Erreur : veuillez fournir un tableau de nombres");
} else {
  console.log(result); // Affiche [1, 2, 3, 4, 5]
}
