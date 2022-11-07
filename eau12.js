// Différence minimum absolue
// Créez un programme qui affiche la différence minimum absolue entre deux éléments d’un tableau constitué uniquement de nombres. Nombres négatifs acceptés.
// Exemples d’utilisation :
// $> python exo.py 5 1 19 21
// 2
// $> python exo.py 20 5 1 19 21
// 1
// $> python exo.py -8 -6 4
// 2
let args = process.argv.slice(2);
console.log(args);
let liste = [];
let resultats = [];
for (let i = 0; i < args.length; i++) {
  let numbers = parseInt(args[i]);
  // console.log(numbers);
  liste.push(numbers);
}
//liste de numbers
// console.log(liste);
// faire les soustractions
let listeSize = liste.length;
// console.log(listeSize);
// calculs listeSize -1
// tout convertir en nombre positif
const toPositive = (n) => {
  if (n < 0) {
    n = n * -1;
  }
  return n;
};
if (args == []) {
  console.log('error');
  return;
} else {
  // calcul entre chaque valeur de la liste
  for (let i = 0; i < 1; i++) {
    let test = liste[i] - liste[1];
    let test2 = liste[i] - liste[2];
    let test3 = liste[i] - liste[3];
    resultats.push(toPositive(test));
    resultats.push(toPositive(test2));
    resultats.push(toPositive(test3));
    for (let j = 1; j < 2; j++) {
      let test = liste[j] - liste[2];
      let test3 = liste[j] - liste[3];
      resultats.push(toPositive(test));
      resultats.push(toPositive(test3));
      for (let k = 2; k < 3; k++) {
        let test = liste[k] - liste[3];
        resultats.push(toPositive(test));
      }
    }
  }
  // console.log(resultats);

  // retrouver la valeur minimale
  const myArrayMin = (arr) => {
    let len = arr.length;
    let min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  myArrayMin(resultats);
  console.log(myArrayMin(resultats));
}
