// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

function combinations() {
  // Create an empty array to store the combinations
  const combos = [];

  // Loop through the numbers 00 to 99 (inclusive)
  for (let i = 0; i < 100; i++) {
    for (let j = i + 1; j < 100; j++) {
      // If the numbers are in ascending order and do not repeat,
      // add them to the array of combinations
      if (i < j) {
        combos.push(`${i.toString().padStart(2, '0')} ${j.toString().padStart(2, '0')}`);
      }
    }
  }

  // Return the array of combinations
  return combos;
}

console.log(combinations());
