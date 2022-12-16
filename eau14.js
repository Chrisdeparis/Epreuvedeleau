// tri par order ASCII
// methode valeur asci
// Exemples d’utilisation :
// $> python exo.py Alfred Momo Gilbert
// Alfred Gilbert Momo
// $> python exo.py A Z E R T Y
// A E R T Y Z
// let args = ['Alfred', 'Momo', 'Gilbert'];
let args = process.argv.slice(2);
// console.log(args);
// transformer args en str
let reg = /,/g;
let chaine = args.toString();
let check = reg.test(chaine);
let replace = chaine.replace(reg, " ");
let x = "m";
var ascii_code = x.codePointAt(0);

// paramètres reçus
let str = replace;
// console.log(str);
// trouver les espaces
let find = /\s/g;
let verif = find.test(chaine);
//position
let pos = replace.indexOf(" ");

// find index position of letter after space
const findIndex = (str, substr) => {
  str = str.toLowerCase();
  let result = [];
  let idx = str.indexOf(substr);
  while (idx !== -1) {
    result.push(idx + 1);
    idx = str.indexOf(substr, idx + 1);
  }
  // ajouter index premier mot
  result.splice(0, 0, 0);
  if (result) return result;
};

const valWord = () => {
  let i = 0;
  let total = [];
  let test = str.split("");
  let nb = 0;
  let inLetters = [];
  // calcul valeur première lettre mot
  while (i < str.length) {
    nb = i++;
    let addValue = str.codePointAt(nb);
    total.push(addValue);
  }

  const decimalToText = (unicodeArray) => {
    let arr = [];
    for (let index in unicodeArray) {
      let text = String.fromCharCode(unicodeArray[index]);
      arr.push(text);
    }
    return arr.join("");
  };

  let x = findIndex(str, " ");

  const sort_let = () => {
    let result = [];
    let j = findIndex(str, " ");
    let taille = x.length;
    for (let i = 0; i < taille; i++) {
      result.push(total[j[i]]);
    }
    const containsEvenNums = function (numArray) {
      let containsEvenNum = false;

      numArray.forEach(function (element) {
        if (element % 2 == 0) {
          containsEvenNum = true;
        }
      });
      return containsEvenNum;
    };

    const sort_word = () => {
      let newWord = [];
      let indexWord = findIndex(str, " ");
      let nBWords = [];
      // ajouter les index en fonction du nombre d'éléments
      for (let i = 0; i < taille; i++) {
        // index position du debut des mots dans str
        nBWords.push(total[j[i]]);
      }
      for (let i = 0; i < nBWords.length; i++) {
        newWord.push(str.slice(indexWord[i]));
      }
      let reponse = [];
      reponse.push(newWord[0]);
      //separer les mots
      const usingSplit = newWord[0].split(" ");
      // resultat words
      console.log(usingSplit.sort().join(" "));
    };

    if (containsEvenNums(result)) {
      sort_word();
      return decimalToText(result.sort()).split("").join(" ");
    } else {
      sort_word();
    }
  };
  let liste = sort_let();
  return liste;
};

valWord();
