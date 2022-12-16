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

const selectSort = (arr) => {
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    console.error("Error: input must be an array");
    return;
  }

  // Check if the array contains only numbers
  if (arr.some(isNaN)) {
    console.error("Error: input array must contain only numbers");
    return;
  }

  // Implement the selection sort algorithm
  for (let i = 0; i < arr.length - 1; i++) {
    // Find the minimum element in the unsorted part of the array
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element in the unsorted part of the array
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  // Return the sorted array
  return arr;
};

// Get the input array from the command line arguments
const args = process.argv.slice(2);

// Parse the arguments as numbers
const array = args.map(Number);

// Use the function to sort the array
const result = selectSort(array);
// console.log(result.join(" "));

let str = args.toString();
let regDigit = /[0-9]+/;
let checkDigit = regDigit.test(str);

if (checkDigit === true) {
  console.log(result.join(' '));
} 
