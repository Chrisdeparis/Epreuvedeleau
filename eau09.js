// Créez un programme qui affiche le premier index d’un élément recherché dans un tableau. Le tableau est constitué de tous les arguments sauf le dernier. L’élément recherché est le dernier argument. Afficher -1 si l’élément n’est pas trouvé.
// Exemples d’utilisation :
// $> python exo.py Ceci est le monde qui contient Charlie un homme sympa Charlie
// 6
// $> python exo.py test test test
// 0
// $> python exo.py test boom
// -1
let liste = [];
let newArr = [];


// transformer array en string pour argument
let str = process.argv.slice(2);
let args = str.toString();
let reg = /,/g;
let arg = args.replace(reg, ' ');

const indexLastWord = (arg) => {
    if(arg == '' || str == []){
        console.log('error');
        return;
    }
  let split = arg.split(' ');

  split.map((word) => {
    liste.push(word);
  });
  //chaque mot dans un tableau

  // retirer le dernier
  let indexLast = liste.length - 1;
  let lastword = liste[indexLast];

  // parcourir tous les éléments sauf le dernier
  for (let i = 0; i < indexLast; i++) {
    newArr.push(liste[i]);
  }
  //nouveau tableau sans le dernier élement

  // verif si lastword existe dans newArr
  if (newArr.indexOf(lastword) === -1) {
    console.log(-1);
  } else {
    console.log(newArr.indexOf(lastword));
  }
};

indexLastWord(arg);
