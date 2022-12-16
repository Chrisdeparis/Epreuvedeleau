// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.
// Exemples d’utilisation :
// $> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
// 6
// $> python exo.py test test test
// 0
// $> python exo.py test boom
// -1
const args = process.argv.slice(2);

// Check if there are at least two arguments
if (args.length < 2) {
  console.error("Error: at least two arguments are required");
  return;
}

// Get the array of elements and the searched element
const elements = args.slice(0, -1);
const searched = args[args.length - 1];

// Search for the first occurrence of the searched element in the array
const index = elements.indexOf(searched);

// Print the result
if (index === -1) {
  console.log(-1);
} else {
  console.log(index);
}

