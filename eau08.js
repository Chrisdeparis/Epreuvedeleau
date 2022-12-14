// $> python exo.py “bonjour mathilde, comment vas-tu ?!”
// Bonjour Mathilde, Comment Vas-tu ?!


// $> python exo.py 42
// error

const capitalize = (s) => {
  // Check if the input is a string
  if (typeof s !== "string") {
    console.error("Error: input must be a string");
    return;
  }

  // Split the string into an array of words
  const words = s.split(/[ \t\n]/);

  // Capitalize the first letter of each word
  const capitalized = words.map((word) => {
    const firstLetter = word[0].toUpperCase();
    const rest = word.slice(1).toLowerCase();
    return firstLetter + rest;
  });

  // Join the words back into a single string
  return capitalized.join(" ");
};

// Get the input string from the command line arguments
const args = process.argv.slice(2);

// Check if there is exactly one argument
if (args.length !== 1) {
  console.error("Error: exactly one argument is required");
  return;
}

// Use the function to capitalize the given string
const result = capitalize(args[0]);
console.log(result);
