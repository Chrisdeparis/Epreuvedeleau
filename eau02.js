// Créez un programme qui affiche toutes les différentes combinaisons de deux nombre entre 00 et 99 dans l’ordre croissant.

function combinaison() {
  let result = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      for (let k = 0; k < 10; k++) {
        for (let l = 0; l < 10; l++) {
          let num1 = `${i}${j}`;
          let num2 = `${k}${l}`;
          if (num1 !== num2) {
            if (!result.includes(`${num1} ${num2}`)) {
              if (!result.includes(`${num2} ${num1}`)) {
                result.push(`${num1} ${num2}`);
              } else {
                //no add
              }
            } else {
              //no add
            }
          }
        }
      }
    }
  }
  return result;
}

function displayResult(result) {
  let stringResult = '';
  for (let i = 0; i < result.length - 1; i++) {
    stringResult += `${result[i]}, `;
  }
  stringResult += `${result[result.length - 1]}`;
  console.log(stringResult);
}

let resultat = combinaison();
displayResult(resultat);
