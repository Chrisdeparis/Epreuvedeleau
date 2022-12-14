// Créez un programme qui affiche ses arguments reçus à l’envers.
let args = process.argv.slice(2);
function reverseArgs() {
  // Check if there are any arguments
  if (arguments.length === 0) {
    console.error('No arguments were provided.');
    return;
  }

  // Loop through the arguments in reverse order
  for (let i = arguments.length - 1; i >= 0; i--) {
    // Check if the argument is a string
    if (typeof arguments[i] !== 'string') {
      console.error('Invalid argument: ' + arguments[i]);
      return;
    }

    // Output the argument
    console.log(arguments[i]);
  }
}

reverseArgs(args);
