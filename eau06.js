// Créez un programme qui détermine si une chaîne de caractère se trouve dans une autre.

// Exemples d’utilisation :
// $> python exo.py bonjour jour
// true

// $> python exo.py bonjour joure
// false

// $> python exo.py 42
// error

function isStringInString(haystack, needle){
  return haystack.includes(needle);
}


const errorOnlyTwoArguments = new Error("error argument");

function isOnlyTwoArguments(args){
return(args.length == 2);
}

/*
* Return 1 if no errors has been detected, else return error message
*/
function checkArgumentForError(args){
let testResult = 1;
if(!isOnlyTwoArguments(args)){
  //1.a if none or more than two argument has been passed
  testResult = errorOnlyTwoArguments;
}
return testResult;
}


let args = process.argv.slice(2);
let checkResult = checkArgumentForError(args);
let result = "error";


//1. Arguments test
if(checkResult !== 1){
result = checkResult.message;
} else {
//2. Check if second argument is included in the first argument
result = isStringInString(args[0], args[1]);
}


console.log(result);
