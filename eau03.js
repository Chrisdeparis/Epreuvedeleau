// Créez un programme qui affiche ses arguments reçus à l’envers.

function invertArguments(arrayArguments){
    let result = [];
    for(let i=arrayArguments.length-1; i>=0; i--){
      result.push(arrayArguments[i]);
    }
    return result;
}

function displayResult(result){
    result.forEach((item, i) => {
      console.log(item);
    });
  
}

const errorMissingArguments = new Error("Erreur d'Arguments");

function isArgumenMissing(args){
    return(args.length<=0);
}

const args = process.argv.slice(2);
let result = [];

if(isArgumenMissing(args)){
    console.log(errorMissingArguments.message);
    process.exit();
} else {
    result = invertArguments(args);
}

displayResult(result);
