// Créez un programme qui affiche le N-ème élément de la célèbre suite de Fibonacci. (0, 1, 1, 2) étant le début de la suite et le premier élément étant à l’index 0.

function getFibonacciElementByIndex(index){
    if(index <= 0){
      return 0;
    } else if (index == 1) {
      return 1;
    } else {
      return getFibonacciElementByIndex(index - 1) + getFibonacciElementByIndex(index - 2);
    }
  }
  


  const errorNegative = new Error("l'Argument doit etre un entier positif.");
  const errorNotAnInteger = new Error("l'argument n'est pas un entier.");
  const errorWrongArguments = new Error("Mauvais arguments.");
  const error = new Error("-1");
  
  function isArgumentNegative(argument){
    return(argument<0);
  }
  
  function isArgumentNotAnInteger(argument){
    return(argument % 1 !== 0);
  }
  
  function isThereOneAndOnlyOneArgument(args){
    return(args.length == 1);
  }
  

  const args = process.argv.slice(2);
  

  let element = -1;
  if(isThereOneAndOnlyOneArgument(args)){
    const indexElement = args[0];
    if(!isArgumentNotAnInteger(indexElement)){
        if(!isArgumentNegative(indexElement)){
          element = getFibonacciElementByIndex(indexElement);
        } else {
          console.log(errorNegative.message);
        }
    } else {
      console.log(errorNotAnInteger.message);
    }
  } else {
    console.log(errorWrongArguments.message);
  }
  
 
  console.log(element);
