// Créez un programme qui affiche ses arguments reçus à l’envers.
let arguments = process.argv.slice(2);
function reverseArgs(args) {
  // Check if there are any arguments
  if (args.length === 0) {
    console.error('No arguments were provided.');
    return;
  }

  // Loop through the arguments in reverse order
  for (let i = args.length - 1; i >= 0; i--) {
    // Check if the argument is a string
    if (typeof args[i] !== 'string') {
      console.error('Invalid argument: ' + args[i]);
      return;
    }

    // Output the argument
    console.log(args[i]);
  }
}

reverseArgs(arguments);
