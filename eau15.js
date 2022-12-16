// Créez un programme qui célèbre votre victoire.
// Exemples d’utilisation :
// $> ruby exo.rb
// J’ai terminé l’Épreuve de l’Eau et c’était [].
// $>
let args = process.argv.slice(2);

function arrayIsEmpty(array) {
    //If it's not an array, return FALSE.
    if (!Array.isArray(array)) {
        return FALSE;
    }
    //If it is an array, check its length property
    if (array.length == 0) {
        //Return TRUE if the array is empty
        return true;
    }
    //Otherwise, return FALSE.
    return false;
}

if (arrayIsEmpty(args)) {
  console.log("J'ai terminé l'Epreuve de l'Eau et c'était cool"); 
} else {
  console.log("J'ai terminé l'Epreuve de l'Eau et c'était "+args.toString());
}
