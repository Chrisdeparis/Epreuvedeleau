// Créez un programme qui affiche le premier nombre premier supérieur au nombre donné en argument.

let args = process.argv.slice(2);

if(args<0 || args == ''){
    console.log(-1);
    return;
}

function nbPremier(nb) {
  
  for (let i = 2; i < nb; i++) {
    if (nb % i === 0) {
      return false;
    }
  }
  return nb > 1;
}
// liste de nombre premier de 0 à 102
let listePremier = [];
for (let i = 0; i < 102; i++) {
  if (nbPremier(i)) {
    // console.log(i);
    listePremier.push(i);
  }
}

//trouver le nombre premier dans un échantillon de 0 à 102 supérieur
if (0 < args < 102) {
  const goal = args;
  const closest = listePremier.reduce((prev, curr) => {
    return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
  });

  listePremier.indexOf(closest);

  //element suivant
  let IndexNextNumber = listePremier.indexOf(closest) + 1;
  let nextNumber = listePremier[IndexNextNumber];
  console.log(nextNumber);
}
