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
const my_bubbleSort = (arr) => {
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

  // Implement the bubble sort algorithm
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap the two elements
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        isSorted = false;
      }
    }
  }

  // Return the sorted array
  return arr;
};

// Get the input array from the command line arguments
const args = process.argv.slice(2);

// Parse the arguments as numbers
const array = args.map(Number);

// Use the function to sort the array
const result = my_bubbleSort(array);
console.log(result.join(" "));

