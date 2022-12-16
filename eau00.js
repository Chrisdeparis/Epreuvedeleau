// Créez un programme qui affiche toutes les différentes combinaisons possibles de trois chiffres dans l’ordre croissant, dans l’ordre croissant. La répétition est volontaire.
// 012, 013, 014, 015, 016, 017, 018, 019, 023, 024, ... , 789
// 987 n’est pas là parce que 789 est présent. et 987 est décroissant
// 020 n’est pas là parce que 0 apparaît deux fois.
// 021 n’est pas là parce que 012 est présent. et 021 est décroissant
// 000 n’est pas là parce que cette combinaison ne comporte pas exclusivement des chiffres différents les uns des autres.


function combinations(n) {
  // Create an empty array to store the combinations
  const combos = [];

  // Loop through the numbers 0 to n-1 (inclusive)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        // If the numbers are in ascending order and do not repeat,
        // add them to the array of combinations
        if (i < j && j < k) {
          combos.push(`${i}${j}${k}`);
        }
      }
    }
  }

  // Return the array of combinations
  return combos.toString();
}

console.log(combinations(10));
